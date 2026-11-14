function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Master Live Analytics Portal')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getDashboardLinks() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0];
  const data = sheet.getDataRange().getValues();

  const dashboards = [];

  // Read rows starting from row 2 (row 1 = headers)
  for (let i = 1; i < data.length; i++) {
    const title = data[i][0] ? String(data[i][0]).trim() : '';
    const url = data[i][1] ? String(data[i][1]).trim() : '';

    if (title && url) {
      dashboards.push({ title: title, url: url });
    }
  }

  return dashboards;
}