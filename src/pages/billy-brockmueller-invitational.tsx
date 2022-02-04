import React from "react"
import Omac from "../images/omac.jpg"
import theme from "../config/theme"
import Card from "../components/card"
import PageBody from "../components/page-body"
import Button from "../components/button"
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
  const billyBio =
    <Card title="About Billy">
      <p>
      This meet is named in memory of Brown Running Club member Billy Brockmueller.
      Billy graduated with a Master’s degree in Physics from Brown University in spring of 2018,
      and passed away in December of 2018. In Billy's honor, proceeds from concessions at the
      meet go to <a href="www.simbaministries.com">Simba Ministries</a>, an organization which Billy
      was involved with during his time at Brown.
      </p>
      <Button
        text="Read more about Billy ➞"
        link="/billy-brockmueller-invitational/about-billy"
      ></Button>
    </Card>
  return (
    <Layout title="Billy Brockmueller Invitational" image={Omac}>
      <PageBody>
        <WideContainer>
          <Card>
            <p>
              <b>Date:</b> Saturday, March 12, 2022 <br />
              <b>Time:</b> Events begin at noon. Teams may arrive <b>no earlier than 11am</b>.
              <br />
              <b>Location:</b> Olney-Margolies Athletic Center, 235 Hope Street, Providence, RI 02906 <br />
              <br />
              <b>Events:</b> 60m, 60m Hurdles, 200m, 400m, 800m, Mile, 3k, 5k, 4x200m Relay, 4x400m Relay, 4x800m Relay, Long Jump, High Jump
              <br />
              Approximate event start times will be posted closer to the meet.
              <br />
              Women will run before men in all races.
              <br />
              Heats will run faster to slower.
              <br />
              Long jump will be an open pit from 12:30-2:00.
              Jumpers may not do walkthroughs once the event has started.
              <br />
              <br />
              <b>Registration: </b>
                The preferred method for entries is on <a href="https://www.directathletics.com/meets/track/72457.html">DirectAthletics</a>.
                Otherwise, email <a href="mailto:run@brown.edu">run@brown.edu</a> to request an entry form.
              <ul style={{ listStyleType: "none" }}>
                <li>Registration Opens: 12:00 am, Monday, February 14</li>
                <li>Registration Closes: 11:59 pm, Monday, March 7</li>
              </ul>
              <br />
              <b>Entry Fees:</b>
              <ul style={{ listStyleType: "none" }}>
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
              <b>Check-in:</b> You may check in with the clerk up to 60 minutes before your event.
                Please check in no later than 20 minutes before your scheduled event time,
                or you will be scratched. We will run up to 5 minutes ahead of the listed schedule.
              <br />
              <br />
              <b>Heat Sheets and Results:</b> Heat sheets will be posted in the facility and on the meet homepage.
                Final results will be available there and emailed to participants.
                Meet updates and results will be posted online via DirectAthletics and in the facility as the day progresses.
              <br />
              <br />
              <b>Restrooms/Locker Rooms:</b> There are limited restrooms and changing facilities available in the OMAC.
                Those not racing within the next hour should use the restrooms in the Nelson Fitness Center lobby next door.
              <br />
              <br />
              <b>Awards:</b> At clerk table: medal awarded to top three finishers in each event. Plaques to top men and women NIRCA teams.
              <br />
              <br />
              <b>Accessibility:</b> The facility is ADA accessible. Call or email ahead for ground-level entrance.
              <br />
              <br />
              <b>Contact:</b> Max Heller, Meet Director:{" "}
              <a href="mailto:run@brown.edu">run@brown.edu</a> (preferred) or 518-364-7530
            </p>
          </Card>
          <MediaQuery query="(max-width: 799px)">
            {billyBio}
            {results}
          </MediaQuery>
        </WideContainer>
        <MediaQuery query="(min-width: 800px)">
          <NarrowContainer>
            {billyBio}
            {results}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  )
}
