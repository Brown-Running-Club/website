import React from "react"
import BrownStadium from "../images/brown-stadium.jpg"
import Card from "../components/card"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import NarrowContainer from "../components/narrow-container"
import MediaQuery from "react-responsive"
import Layout from "../components/layout"
import Schedule from "../components/brunos-backyard-classic/order-of-events"

export default () => {
  const schedule =
    <Card title="Schedule">
      <Schedule />
      <br />

      Women will run before men and heats will run fast to slow.
      <br />
      Long jump will be an open pit from 11:15-12:45 PM.
      High jump will start at 11:15 PM at 3'8".
      Jumpers may not do runthroughs once the event has started.
    </Card>;

  return (
    <Layout title="Bruno's Backyard Classic" image={BrownStadium}>
      <PageBody>
        <WideContainer>
          <Card>
            <p>
              <b>Date:</b> Saturday, April 23, 2022 <br />
              <b>Time:</b> Events begin at 11am. Teams may arrive <b>no earlier than 10am</b>.
              <br />
              <b>Location:</b> Brown Stadium, 400 Elmgrove Ave, Providence, RI 02906 <br />
              <br />
              <b>Registration: </b>
              Registration will be done through <a href="https://www.directathletics.com/meets/track/73516.html">DirectAthletics</a>.
              <br />
              <b>Entry Fees:</b>
              <ul style={{ listStyleType: "none" }}>
                <li>$10/athlete for middle schoolers (be sure to include class year in registration)</li>
                <li>$15/athlete for college club athletes (NIRCA) and high schoolers (be sure to include class year in registration)</li>
                <li>$20/athlete for other participants (college varsity athletes, non-collegiate club teams, unattached athletes)</li>
                <li>$250 max/gender team (applies to all teams and clubs)</li>
              </ul>
              Race day registration will be available for $30 until the start of the meet or one hour before the desired event, whichever is earlier.
              <br />
              <br />
              <b>Payment:</b> Invoices will be sent after registration closes.
              <br />
              <br />
              <b>Spectator Admission:</b> Free
              <br />
              <br />
              <b>Event Check-In:</b> You may check in with the clerk up to 60 minutes before your event.
              Please check in no later than 20 minutes before your scheduled event time,
              or you will be scratched. We will run up to 5 minutes ahead of the listed schedule.
              <br />
              <br />
              <b>Heat Sheets and Results:</b> Heat sheets will be posted at the facility and on the meet homepage.
              Final results will be available there and emailed to participants.
              Meet updates and results will communicated via email and in the facility as the day progresses.
              <br />
              <br />
              <b>Awards:</b> Medals will be awarded to top three finishers in each event and plaques to the top men's and women's NIRCA teams.
              <br />
              <br />
              <b>Contact:</b> Aidan Hennessey, Meet Director: <a href="mailto:run@brown.edu">run@brown.edu</a> (preferred) or 978-758-8823
            </p>
          </Card>
          <MediaQuery query="(max-width: 799px)">
            {schedule}
          </MediaQuery>
        </WideContainer>
        <MediaQuery query="(min-width: 800px)">
          <NarrowContainer>
            {schedule}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  )
}
