import React from "react"
import Kickoff from "../images/kickoff.jpg"
import theme from "../config/theme"
import Card from "../components/card"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import NarrowContainer from "../components/narrow-container"
import MediaQuery from "react-responsive"
import Layout from "../components/layout"
import Results from "../components/billy-brockmueller-invitational/results"

export default () => {
  const results =
    <Card title="Results">
      <Results />
    </Card>;
  return (
    <Layout title="Billy Brockmueller Invitational" image={Kickoff}>
      <PageBody>
        <WideContainer>
          <Card>
            <p style={styles.welcomeText}>
              <b>Date:</b> Saturday, March 12, 2022 <br />
              <b>Time:</b> Events begin at noon. Teams may arrive <b>no earlier than 11am</b>.
              <br />
              <b>Location:</b> Olney-Margolies Athletic Center, 235 Hope Street, Providence, RI 02906 <br />
              <b>Parking:</b> TBD
              <br />
              <br />
              <b>Events:</b> Approximate event start times will be posted closer to the meet.
              TODO
              <br />
              Women will run before men in all races. Heats will run faster to slower.
              <br />
              Long jump will be an open pit from 12:30-2:00.
              Jumpers may not do walkthroughs once the event has started.
              <br />
              <br />
              <b>Registration:</b>
                The preferred method for entries is on <a href="https://www.directathletics.com/meets/track/72457.html">DirectAthletics</a>.
                Otherwise, email <a href="mailto:run@brown.edu">run@brown.edu</a> to request an entry form.
              <ul>
                <li>Registration Opens: 12:00 am, Monday, February 14</li>
                <li>Registration Closes: 11:59 pm, Monday, March 7</li>
              </ul>
              <br />
              <b>Entry Fee:</b>
              <ul>
                <li>$15/athlete for college club athletes (NIRCA) and high schoolers</li>
                <li>$20/athlete for other participants (college varsity athletes, non-collegiate club teams, unattached athletes)</li>
                <li>$250 max/gender team (applies to all teams and clubs)</li>
              </ul>
              Race day registration will be available for $30 until the start of the meet or one hour before the desired event, whichever is earlier.
              <br />
              <br />
              <b>Payment:</b> Invoices will be sent after registration closes.
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <b>
                    <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=89BERVN4EHAXQ">
                      Credit Card/PayPal:
                    </a>
                  </b>{" "}
                  follow link or send to run@brown.edu
                </li>
                <li>
                  <b>
                    <a href="https://venmo.com/brownrunningclub">Venmo:</a>
                  </b>{" "}
                  follow link or send to @BrownRunningClub. Include full name in
                  description
                </li>
                <li>
                  <b>Cash:</b> Pay in cash when you check-in
                </li>
                <li>
                  <b>Check:</b> Make payable to {'"'}Brown Club Sports – Running
                  Club{'"'}, mail to {'"'}Brown Club Sports, 225 Hope St. Box
                  1933, Providence, RI 02912{'"'}
                </li>
              </ul>
              <br />
              <b>Spectator Admission:</b> Free <br />
              <br />
              <b>COVID-19 Policies:</b> All participants and spectators are required to adhere to Brown's visitor guidelines.
              Namely, athletes are required to wear masks except while competing, and spectators are required to wear masks at all times.
              For the most up-to-date information, see <a href="https://healthy.brown.edu/visitors-guests">Brown's website</a>.
              <br />
              <br />
              <b>Check-in:</b> You may check with the clerk in up to 60 minutes before your event.
                Please check in no later than 20 minutes before your scheduled event time,
                or you will be scratched. We will run up to 5 minutes ahead of the listed schedule.
              <br />
              <br />
              <b>Heat Sheets and Results:</b> Heat sheets will be posted in the facility and on the meet homepage.
                Final results will be available there, via email, and on clubrunning.org. Meet updates and results will be posted online via DirectAthletics and in the facility as the day progresses.
              <br />
              <br />
              <b>Restrooms/Locker Rooms:</b> There are limited restrooms and changing facilities available in the OMAC.
                Those not racing within the next hour should use the restrooms in the Nelson Fitness Center lobby next door.
              <br />
              <br />
              <b>Awards:</b> At clerk table: medal awarded to top three finishers in each, ribbons to second and third place. Plaques to top men and women NIRCA teams.
              <br />
              <br />
              <b>Contact:</b> Max Heller, Meet Director:{" "}
              <a href="mailto:run@brown.edu">run@brown.edu</a> (preferred) or 518-364-7530
              <br />
              <br />
              <b>Accessibility:</b> The facility is ADA accessible. Call or email ahead for ground-level entrance.
            </p>
          </Card>
          <MediaQuery query="(max-width: 799px)">
            {results}
          </MediaQuery>
        </WideContainer>
        <MediaQuery query="(min-width: 800px)">
          <NarrowContainer>
            {results}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  )
}

const styles = {
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
  videoContainer: {
    position: 'relative' as const,
    width: '100%',
    height: 0,
    paddingBottom: '56.25%',
  },
  video: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 'auto'
  }
}
