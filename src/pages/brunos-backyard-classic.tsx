import React from "react"
import BrownStadium from "../images/brown-stadium.jpg"
import Card from "../components/card"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Layout from "../components/layout"

export default () => {
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
              Registration will be done through DirectAthletics (coming soon).
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
              <b>Awards:</b> Medal will be awarded to top three finishers in each event and plaques to the top men's and women's NIRCA teams.
              <br />
              <br />
              <b>Contact:</b> Max Heller, Meet Director: <a href="mailto:run@brown.edu">run@brown.edu</a> (preferred) or 518-364-7530
            </p>
          </Card>
        </WideContainer>
      </PageBody>
    </Layout>
  )
}
