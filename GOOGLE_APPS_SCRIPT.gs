var SPREADSHEET_ID = '1VgfBmmvZU-oJj7q-BhnF68x3Etmm5YyGeuCFzUcEyjw';
var SHEET_NAME = 'Respuestas';
var HEADERS = ["Fecha", "Nombre", "Asistencia", "Personas", "Acompanantes", "Cancion", "Mensaje"];
var COLUMN_WIDTHS = [170, 220, 200, 95, 280, 260, 320];

function doGet(e) {
  try {
    var mode = (e && e.parameter && e.parameter.mode) ? e.parameter.mode : "";

    if (mode !== "list") {
      return json_({ ok: true, message: "API activa" });
    }

    var sheet = getOrCreateSheet_();
    var values = sheet.getDataRange().getValues();

    if (!values || values.length <= 1) {
      return json_({ rows: [] });
    }

    var rows = [];
    for (var i = 1; i < values.length; i++) {
      rows.push({
        createdAt: toSafeString_(values[i][0]),
        name: toSafeString_(values[i][1]),
        attendance: toSafeString_(values[i][2]),
        guests: toSafeString_(values[i][3]),
        companionNames: toSafeString_(values[i][4]),
        songSuggestion: toSafeString_(values[i][5]),
        message: toSafeString_(values[i][6])
      });
    }

    return json_({ rows: rows });
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: toSafeString_(error && error.message ? error.message : error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var params = (e && e.parameter) ? e.parameter : {};
    var mode = params.mode || "append";

    if (mode === "clear") {
      var clearSheet = getOrCreateSheet_();
      var deleted = clearDataRows_(clearSheet);
      return json_({ ok: true, deleted: deleted });
    }

    if (mode !== "append") {
      return json_({ ok: false, error: "Modo no soportado" });
    }

    var sheet = getOrCreateSheet_();

    var name = normalizeText_(params.name);
    var attendance = toSafeString_(params.attendance);
    var guests = normalizeGuestCount_(params.guests);
    var companionNames = normalizeCompanionNames_(params.companionNames);
    var validationError = validateSubmission_(name, attendance, guests, companionNames);

    if (validationError) {
      return json_({ ok: false, error: validationError });
    }

    sheet.appendRow([
      normalizeCreatedAt_(params.createdAt),
      name,
      attendance,
      guests,
      companionNames,
      normalizeText_(params.songSuggestion),
      normalizeText_(params.message)
    ]);

    // Si no asiste o viene solo, no se necesitan acompanantes.
    var lastRow = sheet.getLastRow();
    if (!isAttending_(attendance) || guests <= 1) {
      sheet.getRange(lastRow, 5).setValue("");
    }

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: toSafeString_(error && error.message ? error.message : error) });
  }
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    if (!SPREADSHEET_ID || SPREADSHEET_ID === 'PEGAR_ID_DE_TU_GOOGLE_SHEET') {
      throw new Error('Configura SPREADSHEET_ID con el ID real de tu Google Sheet.');
    }
    ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  }

  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  ensureSheetLayout_(sheet);

  return sheet;
}

function clearDataRows_(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    return 0;
  }

  var rowsToDelete = lastRow - 1;
  sheet.deleteRows(2, rowsToDelete);
  return rowsToDelete;
}

function ensureSheetLayout_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  } else {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }

  sheet.setFrozenRows(1);
  for (var i = 0; i < COLUMN_WIDTHS.length; i++) {
    sheet.setColumnWidth(i + 1, COLUMN_WIDTHS[i]);
  }

  var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange
    .setFontWeight("bold")
    .setHorizontalAlignment("center")
    .setBackground("#f1f3f4")
    .setWrap(true);

  if (sheet.getLastRow() > 1) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).setVerticalAlignment("middle");
  }
}

function normalizeCreatedAt_(value) {
  var txt = normalizeText_(value);
  if (txt) return txt;
  return Utilities.formatDate(new Date(), 'America/Montevideo', 'yyyy-MM-dd HH:mm:ss');
}

function normalizeGuestCount_(value) {
  var n = parseInt(toSafeString_(value), 10);
  if (isNaN(n) || n < 1) return 1;
  if (n > 8) return 8;
  return n;
}

function normalizeCompanionNames_(value) {
  var txt = normalizeText_(value);
  return txt.replace(/\s*,\s*/g, ', ');
}

function normalizeText_(value) {
  return toSafeString_(value).replace(/\s+/g, ' ').trim();
}

function isAttending_(attendance) {
  var txt = toSafeString_(attendance).toLowerCase();
  return txt.indexOf('si, voy a asistir') !== -1 || txt.indexOf('si voy a asistir') !== -1 || txt === 'si';
}

function validateSubmission_(name, attendance, guests, companionNames) {
  if (!name || name.length < 3) {
    return 'El nombre es obligatorio y debe tener al menos 3 caracteres.';
  }

  if (!attendance) {
    return 'La asistencia es obligatoria.';
  }

  if (isAttending_(attendance) && guests > 1 && !companionNames) {
    return 'Si asisten mas de 1 persona, ingresa los nombres de acompanantes.';
  }

  return '';
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function toSafeString_(value) {
  return value == null ? "" : String(value);
}
