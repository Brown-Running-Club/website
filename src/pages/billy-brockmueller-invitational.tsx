import React from "react"
import Omac from "../images/stick.jpg"
import Card from "../components/card"
import PageBody from "../components/page-body"
import Button from "../components/button"
import WideContainer from "../components/wide-container"
import NarrowContainer from "../components/narrow-container"
import MediaQuery from "react-responsive"
import Layout from "../components/layout"
import Results from "../components/billy-brockmueller-invitational/results"
import OrderOfEvents from "../components/billy-brockmueller-invitational/order-of-events"

export default () => {
  const results =
    <Card title="Results">
      <Results />
    </Card>;

  const billyBio =
    <Card title="About Billy">
      <p>
        This meet is named in memory of Brown Running Club member Billy Brockmueller.
        Billy graduated with a Master's degree in Physics from Brown University in spring of 2018,
        and passed away the following winter. In Billy's honor, proceeds from concessions at the
        meet go to <a href="https://www.simbaministries.com">Simba Ministries</a>, an organization which Billy
        was involved with during his time at Brown.
      </p>
      <Button
        text="Read more about Billy ➞"
        link="/billy-brockmueller-invitational/about-billy"
      ></Button>
    </Card>;

  const schedule =
    <Card title="Schedule">
      <OrderOfEvents />
      <br />

      Women will run before men and heats will run fast to slow.
      <br />
      Long jump will be an open pit from 11:15 AM - 12:45 PM.
      High jump will start at 11:15 AM at 3'8".
      Jumpers may not do runthroughs once the event has started.
    </Card>;

  return (
    <Layout title="Billy Brockmueller Invitational" image={Omac}>
      <PageBody>
        <WideContainer>
          <Card>
            <p>
              <b>Date:</b> Sunday, March 2, 2025 <br />
              <b>Time:</b> Events begin at 11am. Teams may arrive <b>no earlier than 10am</b>.
              <br />
              <b>Location:</b> Olney-Margolies Athletic Center, 235 Hope Street, Providence, RI 02906 <br />
              <br />
              <b>Registration: </b>
              The preferred method for entries is on <a href="https://www.directathletics.com/meets/track/88378.html">DirectAthletics</a>.
              Otherwise, email <a href="mailto:run@brown.edu">run@brown.edu</a> to request an entry form.
              <br />
              <ul style={{ listStyleType: "none" }}>
                <li>Registration Opens: 12:00 am, Thursday, January 30</li>
                <li>Registration Closes: 11:59 pm, Tuesday, February 25</li>
              </ul>
              <b>Entry Fees:</b>
              <ul style={{ listStyleType: "none" }}>
                <li>$10/athlete for middle schoolers (be sure to include class year in registration)</li>
                <li>$20/athlete for college club athletes (NIRCA) and high schoolers</li>
                <li>$25/athlete for other participants (college varsity athletes, non-collegiate club teams, unattached athletes)</li>
                <li>$150 max/gender team for middle school teams</li>
                <li>$300 max/gender team for college clubs (NIRCA) and high school teams</li>
                <li>$300 max/gender team for other teams and clubs</li>
              </ul>
              <br />
              <b> Race Day Registration:</b> Available for $30. Late entry for the 5k, long jump, and high jump will close at 10:30, and late entry for all other events will be available until the start of the meet at 11. No late entry is allowed for the 4x800 or 4x200 relay. We are unable to refund entry fees for any reason including inclement weather, meet cancellation, athlete conflict, scratches, or over-payment. 
              <br />
              <br />
              <b>Payment:</b> Invoices will be sent after registration closes.
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <b><a href="https://payment.brown.edu/C20460_ustores/web/product_detail.jsp?PRODUCTID=3987&SINGLESTORE=true">TouchNet</a> Invoice:</b> Pay invoice online before arrival
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
              <br />
              <b>Check-in:</b> You may check in with the clerk up to 45 minutes before your event.
              Please check in no later than 20 minutes before your scheduled event time,
              or you will be scratched. We will run up to 5 minutes ahead of the listed schedule.
              <br />
              <br />
              <b>Heat Sheets and Results:</b> Heat sheets will be posted in the facility.
              Final results will be available on meet homepage and emailed to participants.
              Meet updates and results will be posted online via DirectAthletics and in the facility as the day progresses.
              Live results will be available <a href="https://www.milesplit.live/meets/596178">here</a>.
              <br />
              <br />
              <b>Restrooms/Locker Rooms:</b> There are limited restrooms and changing facilities available in the OMAC.
              Those not racing within the next hour should use the restrooms in the Nelson Fitness Center lobby next door.
              <br />
              <br />
              <b>Awards:</b> At clerk table: medals awarded to top three finishers in each individual event and the top team for each relay. Plaques to top men and women NIRCA teams.
              <br />
              <br />
              <b>Accessibility:</b> The facility is ADA accessible. Call or email ahead for ground-level entrance.
              <br />
              <br />
              <b>Contact:</b> Adam Juma, Meet Director: <a href="mailto:run@brown.edu">run@brown.edu</a>
            </p>
          </Card>
          <MediaQuery query="(max-width: 799px)">
            {schedule}
            {results}
            {billyBio}
          </MediaQuery>
        </WideContainer>
        <MediaQuery query="(min-width: 800px)">
          <NarrowContainer>
            {billyBio}
            {schedule}
            {results}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  )
}
