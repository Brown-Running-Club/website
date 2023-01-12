import React from "react"
import Omac from "../images/omac.jpg"
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
      Long jump will be an open pit from 12:15-1:45 PM.
      High jump will start at 12:15 PM at 3'8".
      Jumpers may not do runthroughs once the event has started.
    </Card>;

  return (
    <Layout title="Billy Brockmueller Invitational" image={Omac}>
      <PageBody>
        <WideContainer>
          <Card>
            <p>
              <b>Date:</b> (penciled in for) Saturday, March 4, 2023 <br />
              <b>Time:</b> Events begin at 11am. Teams may arrive <b>no earlier than 10am</b>.
              <br />
              <b>Location:</b> Olney-Margolies Athletic Center, 235 Hope Street, Providence, RI 02906 <br />
              <br />
              <b>Registration: </b>
              The preferred method for entries is on <a href="https://www.directathletics.com/meets/track/72457.html">DirectAthletics</a>.
              Otherwise, email <a href="mailto:run@brown.edu">run@brown.edu</a> to request an entry form.
              <br />
              <ul style={{ listStyleType: "none" }}>
                <li>Registration Opens: 12:00 am, Monday, February 6</li>
                <li>Registration Closes: 11:59 pm, Monday, February 27</li>
              </ul>
              <b>Entry Fees:</b>
              <ul style={{ listStyleType: "none" }}>
                <li>$12/athlete for middle schoolers (be sure to include class year in registration)</li>
                <li>$17/athlete for college club athletes (NIRCA) and high schoolers</li>
                <li>$25/athlete for other participants (college varsity athletes, non-collegiate club teams, unattached athletes)</li>
                <li>$150 max/gender team for middle school teams</li>
                <li>$250 max/gender team for college clubs (NIRCA) and high school teams</li>
                <li>$300 max/gender team for other teams and clubs</li>
              </ul>
              Race day registration will be available for $30 until the start of the meet or one hour before the desired event, whichever is earlier. We are unable to refund entry fees for any reason including inclement weather, meet cancellation, athlete conflict, scratches, or over-payment. 
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
              <b>Check-in:</b> You may check in with the clerk up to 60 minutes before your event.
              Please check in no later than 20 minutes before your scheduled event time,
              or you will be scratched. We will run up to 5 minutes ahead of the listed schedule.
              <br />
              <br />
              <b>Heat Sheets and Results:</b> Heat sheets will be posted in the facility and on the meet homepage.
              Final results will be available there and emailed to participants.
              Meet updates and results will be posted online via DirectAthletics and in the facility as the day progresses.
              Live results will be available <a href="http://milesplit.live/meets/465677">here</a>.
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
              <b>Contact:</b> Sydney Roberts, Meet Director: <a href="mailto:run@brown.edu">run@brown.edu</a> (preferred) or 415-866-5446
            </p>
          </Card>
          <MediaQuery query="(max-width: 799px)">
            {/* schedule */}
            {results}
            {billyBio}
          </MediaQuery>
        </WideContainer>
        <MediaQuery query="(min-width: 800px)">
          <NarrowContainer>
            {billyBio}
            {/* schedule */}
            {results}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  )
}
