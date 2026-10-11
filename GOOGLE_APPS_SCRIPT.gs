var SPREADSHEET_ID = 'PEGAR_ID_DE_TU_GOOGLE_SHEET';
var SHEET_NAME = 'Respuestas';

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

    sheet.appendRow([
      toSafeString_(params.createdAt),
      toSafeString_(params.name),
      toSafeString_(params.attendance),
      toSafeString_(params.guests),
      toSafeString_(params.companionNames),
      toSafeString_(params.songSuggestion),
      toSafeString_(params.message)
    ]);

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

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Fecha", "Nombre", "Asistencia", "Personas", "Acompanantes", "Cancion", "Mensaje"]);
  }

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

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function toSafeString_(value) {
  return value == null ? "" : String(value);
}
