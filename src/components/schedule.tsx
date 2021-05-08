import React from "react"
import theme from "../config/theme"

type Event = {
  start: Date
  name: string
  description?: string
}

interface GCalEvent {
  start: { dateTime?: string }
  summary: string
  description: string
}

type Week = {
  monday: Event[]
  tuesday: Event[]
  wednesday: Event[]
  thursday: Event[]
  friday: Event[]
  saturday: Event[]
  sunday: Event[]
}
const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const

const API_KEY = "AIzaSyAujzo9odb_cWUY0YY7eNRd1UQmo7a_Q1E"
const CAL_ID = "run@brown.edu"

async function getEvents(start: Date) {
  // get events for a week
  start.setHours(0)
  start.setSeconds(0)
  start.setMinutes(0)
  start.setMilliseconds(0)
  const end = new Date(start)
  end.setDate(start.getDate() + 7)

  const url =
    "https://www.googleapis.com/calendar/v3/calendars/" +
    encodeURIComponent(CAL_ID) +
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

async function getWeek() {
  const now = new Date()
  const currDay = now.getDay()
  const events = await getEvents(now)
  const grouped = groupEvents(events)
  const week: Partial<Week> = {}
  // order days based on the current day
  for (let i = 0; i < 7; i++) {
    const day = (currDay + i) % 7
    week[DAYS[day]] = grouped[day]
  }
  return week as Week
}

function groupEvents(events: GCalEvent[]) {
  const week: Event[][] = [[], [], [], [], [], [], []]
  for (const event of events) {
    // if datetime isn't defined, this is an all day event
    if (event.start.dateTime != undefined) {
      const start = new Date(event.start.dateTime)
      week[start.getDay()].push({
        start: start,
        name: event.summary,
        description: event.description,
      })
    }  
  }
  return week
}

function prettyTime(date: Date) {
  let time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })
  if (time.charAt(0) == "0") {
    time = time.slice(1)
  }
  return time
}

export default class Schedule extends React.Component<{}, { week?: Week }> {
  renderDay(day: string, events: Event[]) {
    const eventElements = events.map(event => (
      <div style={styles.eventContainer}>
        <div style={styles.eventTimeContainer}>
          <p style={styles.eventTime}>{prettyTime(event.start)}</p>
        </div>
        <div>
          <p style={styles.eventTime}>{event.name}</p>
          {event.description && (
            <p style={styles.eventDescription}>{event.description}</p>
          )}
        </div>
      </div>
    ))
    return (
      <>
        <p style={styles.dayText}>{day.toUpperCase()}</p>
        {eventElements}
      </>
    )
  }

  render() {
    const week = this.state?.week
    let days: JSX.Element[] = []
    if (week) {
      Object.entries(week).forEach(([day, events]) =>
        days.push(this.renderDay(day, events))
      )
    }
    return <>{days}</>
  }

  componentDidMount() {
    getWeek().then(week => this.setState({ week: week }))
  }
}

const styles = {
  dayText: {
    ...(theme.typography.h2 as any),
    color: theme.palette.red,
    margin: 0,
    marginBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    borderTop: "1px solid " + theme.palette.lightGray,
  },
  eventContainer: {
    display: "flex",
    marginBottom: theme.spacing.unit,
  },
  eventTimeContainer: {
    width: theme.spacing.unit * 10,
  },
  eventTime: {
    ...(theme.typography.h2 as any),
    margin: 0,
  },
  eventDescription: {
    ...(theme.typography.h2 as any),
    fontWeight: "normal" as "normal",
    margin: 0,
  },
}
