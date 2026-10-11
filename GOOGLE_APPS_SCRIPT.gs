function doGet(e) {
  var mode = (e && e.parameter && e.parameter.mode) ? e.parameter.mode : "";

  if (mode !== "list") {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: "API activa" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var sheet = getOrCreateSheet_();
  var values = sheet.getDataRange().getValues();

  if (!values || values.length <= 1) {
    return ContentService
      .createTextOutput(JSON.stringify({ rows: [] }))
      .setMimeType(ContentService.MimeType.JSON);
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

  return ContentService
    .createTextOutput(JSON.stringify({ rows: rows }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var params = (e && e.parameter) ? e.parameter : {};
  var mode = params.mode || "append";

  if (mode !== "append") {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: "Modo no soportado" }))
      .setMimeType(ContentService.MimeType.JSON);
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

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Respuestas");

  if (!sheet) {
    sheet = ss.insertSheet("Respuestas");
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Fecha", "Nombre", "Asistencia", "Personas", "Acompanantes", "Cancion", "Mensaje"]);
  }

  return sheet;
}

function toSafeString_(value) {
  return value == null ? "" : String(value);
}
