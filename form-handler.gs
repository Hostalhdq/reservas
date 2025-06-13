function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Reservas");

  var existe = sheet.createTextFinder(data.habitacion + data.fecha_llegada).matchCase(false).findNext();
  if (existe) {
    return ContentService.createTextOutput("Esta habitación ya está reservada para esa fecha.");
  }

  sheet.appendRow([
    new Date(),
    data.nombre,
    data.email,
    data.telefono,
    data.habitacion,
    data.fecha_llegada,
    data.fecha_salida,
    data.desayuno || "No",
    data.hora_llegada
  ]);

  MailApp.sendEmail({
    to: data.email + ",hostalhdq@gmail.com",
    subject: "Confirmación de reserva HDQ",
    htmlBody: "<p>Gracias por reservar en Hostal HDQ, " + data.nombre + ".</p><p>Habitación: " + data.habitacion + "<br>Desde: " + data.fecha_llegada + " hasta " + data.fecha_salida + "<br>Desayuno: " + (data.desayuno || "No") + "</p>"
  });

  return ContentService.createTextOutput("Reserva realizada con éxito. Se ha enviado una confirmación por correo.");
}
