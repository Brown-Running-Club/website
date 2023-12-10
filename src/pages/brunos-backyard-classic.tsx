import React from "react"
import BrownStadium from "../images/brown-stadium.jpg"
import Card from "../components/card"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import NarrowContainer from "../components/narrow-container"
import MediaQuery from "react-responsive"
import Layout from "../components/layout"
import Schedule from "../components/brunos-backyard-classic/order-of-events"
import Results from "../components/brunos-backyard-classic/results"

export default () => {
  const results =
    <Card title="Results">
      <Results />
    </Card>;

  const schedule =
    <Card title="Schedule">
      <Schedule />
      <br />
      Women will run before men and heats will run fast to slow.
      <br />
      Long jump will be an open pit from 11:15-12:45 PM.
      High jump will start at 11:15 AM at 3'8".
      Jumpers may not do runthroughs once the event has started.
    </Card>;

  return (
    <Layout title="Bruno's Backyard Classic" image={BrownStadium}>
      <PageBody>
        <WideContainer>
          <Card>
            <p>
              <b>Date:</b> Saturday, April 22, 2023 <br />
              <b>Time:</b> Events begin at 11am. Teams may arrive <b>no earlier than 10am</b>.
              <br />
              <b>Location:</b> Brown Stadium, 400 Elmgrove Ave, Providence, RI 02906 <br />
              <br />
              <b>Registration: </b>
              Registration will be done through <a href="https://www.directathletics.com/meets/track/78395.html">DirectAthletics</a>. 
              <ul style={{ listStyleType: "none" }}>
                <li>Registration Opens: 12:00 am, Monday, March 27</li>
                <li>Registration Closes: 11:59 pm, Monday, April 17</li>
              </ul>
              <br />
              <b>Entry Fees:</b>
              <ul style={{ listStyleType: "none" }}>
                <li>$10/athlete for middle schoolers (be sure to include class year in registration)</li>
                <li>$17/athlete for college club athletes (NIRCA) and high schoolers</li>
                <li>$25/athlete for other participants (college varsity athletes, non-collegiate club teams, unattached athletes)</li>
                <li>$150 max/gender team for middle school teams</li>
                <li>$250 max/gender team for college clubs (NIRCA) and high schools</li>
                <li>$300 max/gender team for other teams and clubs</li>
              </ul>
              Race day registration will be available for $30 until the start of the meet or one hour before the desired event, whichever is earlier. 
              We are unable to refund entry fees for any reason including inclement weather, meet cancellation, athlete conflict, scratches, or over-payment.
              <br />
              <br />
              <b>Payment:</b> Payment is required upon registration. Invoices will be sent to participants who have not paid after registration closes.
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <b><a href="https://payment.brown.edu/C20460_ustores/web/product_detail.jsp?PRODUCTID=3987&SINGLESTORE=true">TouchNet</a>:</b> Pay online with registration
                </li>
                <li>
                  <b>Check:</b> Make payable to {'"'}Brown Club Sports – Running
                  Club{'"'}, mail to {'"'}Brown Club Sports, 225 Hope St. Box
                  1933, Providence, RI 02912{'"'}
                </li>
              </ul>
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
              <b>Heat Sheets and Results:</b> Heat sheets will be posted at the facility.
              Final results will be available on the meet homepage and emailed to participants.
              Meet updates and results will communicated via email and in the facility as the day progresses.
              <br />
              <br />
              <b>Awards:</b> Medals will be awarded to top three finishers in each event and plaques to the top men's and women's NIRCA teams.
              <br />
              <br />
              <b>Contact:</b> Sydney Roberts, Meet Director: <a href="mailto:run@brown.edu">run@brown.edu</a>
            </p>
          </Card>
          <MediaQuery query="(max-width: 799px)">
            {schedule}
            {results}
          </MediaQuery>
        </WideContainer>
        <MediaQuery query="(min-width: 800px)">
          <NarrowContainer>
            {schedule}
            {results}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  )
}
