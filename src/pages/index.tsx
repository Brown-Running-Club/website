import React from "react"
import TitleImage from "../components/title-image"
import Kickoff from "../images/kickoff.png"
import IvyBrownLogo from "../images/ivybrownlogo.png"
import theme from "../config/theme"
import Card from "../components/card"
import Button from "../components/button"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import NarrowContainer from "../components/narrow-container"
import Layout from "../components/layout"

type Event = {
  time: string
  name: string
  description?: string
}

type Week = { [string]: Array<Event> }

const API_KEY = "AIzaSyAujzo9odb_cWUY0YY7eNRd1UQmo7a_Q1E";
const CAL_ID = "run@brown.edu";
const DAYS_MAP = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

async function getEvents(start) {
  // get events for a week
  start.setHours(0);
  start.setSeconds(0);
  start.setMinutes(0);
  start.setMilliseconds(0);
  const end = new Date(start);
  end.setDate(start.getDate() + 7);

  const url = 'https://www.googleapis.com/calendar/v3/calendars/'
    + encodeURIComponent(CAL_ID) + '/events?orderBy=startTime&singleEvents=true'
    + '&timeMax=' + end.toISOString() + '&timeMin=' + start.toISOString()
    + "&key=" + API_KEY;

  return await fetch(url)
    .then(res => res.json())
    .then(res => res.items);
}

async function getWeek() {
  const now = new Date();
  const currDay = now.getDay();
  const events = await getEvents(now);
  const grouped = groupEvents(events);
  const week = {};
  // order days based on the current day
  for (let i = 0; i < 7; i++) {
    const day = (currDay + i - 1) % 7;
    week[DAYS_MAP[day]] = grouped[day];
  }
  return week;
}

function groupEvents(events) {
  const week = [[], [], [], [], [], [], []];
  for (let event of events) {
    const start = new Date(event.start.dateTime);
    const time = start.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    event = {time: time, name: event.summary, description: event.description};
    week[start.getDay()].push(event);
  }
  return week;
}

export default () => (
  <Layout title={null}>
    <TitleImage image={Kickoff}>
      <img src={IvyBrownLogo} style={styles.titleImage} alt="brown" />
      <p style={styles.titleText}>RUNNING CLUB</p>
    </TitleImage>
    <PageBody>
      <WideContainer>
        <Card>
          <p style={styles.welcomeText}>
            Welcome to the home of recreational and competitive running at Brown
            University! Whether you’re an undergrad, grad student, faculty, or
            staff member, we encourage you to join us for a run. We welcome
            runners of all levels! For those interested in running
            competitively, we compete in cross country races, indoor and outdoor
            track meets, and road races. We normally practice at{" "}
            <b>4:15PM Mon-Fri and 10:00AM Sat-Sun</b> and meet at{" "}
            <b>the bear statue outside the Nelson Fitness Center</b>.
          </p>
          <Button text="Learn more about Running Club ➞" link="/about" />
        </Card>
        <Card title="This Week" centeredTitle>
          {Object.entries(await getWeek()).map((day, events) => (
            <>
              <p style={styles.dayText}>{day.toUpperCase()}</p>
              {events.map(event => (
                <div style={styles.eventContainer}>
                  <div style={styles.eventTimeContainer}>
                    <p style={styles.eventTime}>{event.time}</p>
                  </div>
                  <div>
                    <p style={styles.eventTime}>{event.name}</p>
                    {event.description && (
                      <p style={styles.eventDescription}>{event.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </>
          ))}
        </Card>
        <Card title="Announcements">
          <Button text="More announcements ➞" link="/announcements" />
        </Card>
      </WideContainer>
      <NarrowContainer>
        <iframe
          allowTransparency
          frameBorder="0"
          height="160"
          scrolling="no"
          src="https://www.strava.com/clubs/584452/latest-rides/c5fadd1824dcf9240b1fb8217b0eb8b4927ea891?show_rides=false"
          width="100%"
        ></iframe>
        <iframe
          allowTransparency
          frameBorder="0"
          height="454"
          scrolling="no"
          src="https://www.strava.com/clubs/584452/latest-rides/c5fadd1824dcf9240b1fb8217b0eb8b4927ea891?show_rides=true"
          width="100%"
        ></iframe>
      </NarrowContainer>
    </PageBody>
  </Layout>
)

const styles = {
  titleText: {
    ...theme.typography.title,
    color: theme.palette.white,
    marginTop: theme.spacing.unit * 2,
    textShadow: "0 0 15px #000000, 0 0 10px #000000",
  },
  titleImage: {
    height: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 2,
  },
  welcomeText: {
    ...(theme.typography.h4 as any),
    margin: 0,
  },
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
    width: theme.spacing.unit * 7,
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
