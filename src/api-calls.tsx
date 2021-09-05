const API_KEY = "AIzaSyB_4qRtTbmqHERuJLpTJAWOjkFwx4c2zMo"

export async function getSheetData(sheetId, range) {
  const url =
    "https://sheets.googleapis.com/v4/spreadsheets/" +
    sheetId +
    "/values/" +
    range +
    "?key=" +
    API_KEY
  return await fetch(url)
    .then(res => res.json())
    .then(res => res.values)
}

export async function getWeekEvents(start: Date, calId) {
  // get events for a week
  start.setHours(0)
  start.setSeconds(0)
  start.setMinutes(0)
  start.setMilliseconds(0)
  const end = new Date(start)
  end.setDate(start.getDate() + 7)

  const url =
    "https://www.googleapis.com/calendar/v3/calendars/" +
    encodeURIComponent(calId) +
    "/events?orderBy=startTime&singleEvents=true" +
    "&timeMin=" +
    start.toISOString() +
    "&timeMax=" +
    end.toISOString() +
    "&key=" +
    API_KEY

  return await fetch(url)
    .then(res => res.json())
    .then(res => res.items)
}
