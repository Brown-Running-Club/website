import React from "react"
import FAQsImage from "../images/faqsimage.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import Layout from "../components/layout"

export default () => (
  <Layout title="FAQ" image={FAQsImage}>
    <PageBody>
      <WideContainer>
        <Card title="How do I join?">
          <p style={styles.infoText}>
            Come to a practice and introduce yourself! Find us on{" "}
            <a href="https://www.facebook.com/groups/260972757349158/">
              Facebook
            </a>{" "}
            and be sure to join our email list by emailing run@brown.edu.
          </p>
        </Card>
        <Card title="When/where is practice?">
          <p style={styles.infoText}>
            We normally meet at the Bear Statue outside of the Nelson Fitness
            Center at 4:15 pm on weekdays and 10 am on weekends during the Fall
            and Spring semesters (we occasionally have practice at other times
            due to special events or races; see our calendar for accurate
            information). Practices begin with stretching and core exercises.
            On Mondays and Wednesdays, we'll wait until 4:30pm to start running
            to accommodate 3-4:20pm classes. There is no set end time for
            practices, as it depends on how long you plan to run. Generally,
            this will be somewhere between a half hour to an hour and a half.
          </p>
        </Card>

        <Card title="What’s the time commitment like?">
          <p style={styles.infoText}>
            Our club has no commitment. Whether you are able to run with us
            every day or only once per month, we’d love to have you! If you plan
            on racing, we would like to at least see you present at our weekly
            workouts. Entry decisions for races with limited entries (such as
            regionals and nationals) are based heavily on practice attendance.
          </p>
        </Card>
        <Card title="What should I expect?">
          <p style={styles.infoText}>
            We start practices with announcements, and then break into groups
            based on the paces and distances people want to run. We usually
            follow a run from our routes page, but sometimes we explore other
            areas of Providence.
            <br></br>A typical week of practices usually consists of one or two
            workouts, three or four steady runs, and one long run (typically
            held on Sunday). The workouts are held on the indoor track, outdoor
            track, or the roads depending on the workout type and the weather,
            and are designed for all runners. Training runs are generally
            between 4 and 10 miles.
          </p>
        </Card>
        <Card title="Do I need prior running experience?">
          <p style={styles.infoText}>
            We don’t require a background in running, and we don’t have tryouts
            or cuts. Anyone who wants to run is always welcome to come to
            practice! That being said, members who come to practice frequently
            by definition run often, so our usual pace groups for regular runs
            will be between 7 and 9 minute/mile pace. As you’re getting into
            shape, we recommend coming on days labelled as regular or recovery
            runs (generally Monday and Friday, but check the current week’s
            schedule on our calendar) rather than workouts or long runs so that
            you’ll have more people to run with. We don’t require any prior
            racing experience to compete at meets.
          </p>
        </Card>
        <Card title="Where do you run?">
          <p style={styles.infoText}>
            We run all over the city, and our favorite places include the
            waterfront by India Point Park, Blackstone Boulevard, and the East
            Bay Bike Path. Check out our routes page to view maps of our
            favorite routes.
          </p>
        </Card>
        <Card title="Do you do any cross training?">
          <p style={styles.infoText}>
            Yes! We have regular aquajogging and lifting, as well as other
            activities when members want them. See our calendar for details. If
            you’re cross training and want other runners to join you, make an
            event on Google calendar and invite run@brown.edu.
          </p>
        </Card>
        <Card title="Do you have any social events?">
          <p style={styles.infoText}>
            We often have informal team dinners and movie nights and sometimes
            have larger events, like our end of year formal. We also have
            “destination runs” for donuts or coffee and themed runs on special
            occasions like Halloween, Daylight Saving’s Day, and Pi Day. We’ll
            announce these in emails, our calendar, and on Facebook.
          </p>
        </Card>
        <Card title="What is the competitive team?">
          <p style={styles.infoText}>
            The competitive team, also referred to as the club cross
            country/track team, is the branch of the Brown Running Club for
            runners dedicated to racing in meets. There is no separation at
            practice between competitive and recreational runners.
            <br></br>
            <br></br>
            We compete in many nearby cross country and track meets throughout
            the year, and are affiliated with NIRCA. Check the schedule to see
            this semester’s races. We’ll send out sign up forms for these meets
            in our weekly emails.
            <br></br>
            <br></br>
            To compete on the competitive team, you must register through the
            club sports website. If you plan to complete in at least one race
            this semester, you must also pay our membership dues ($50/year).
            Dues can be paid through Venmo (@BrownRunningClub)
          </p>
        </Card>
        <Card title="How do you keep track of your training?">
          <p style={styles.infoText}>
            Many of our runners use a GPS watch, such as a Garmin, to track
            their running. Some runners upload their runs to Strava, a running
            based social media site where you can follow and support other
            runners. Be sure to join the Brown Running Club group.
          </p>
        </Card>
        <Card title="Where are the local running stores?">
          <p style={styles.infoText}>
            The closest specialty running store is Rhode Runner, 657 North Main
            St, (401) 831-6346
          </p>
        </Card>
      </WideContainer>
    </PageBody>
  </Layout>
)

const styles = {
  infoText: {
    ...(theme.typography.h4 as any),
    margin: 0,
  },
  summaryText: {
    ...(theme.typography.h4 as any),
    margin: 0,
    textAlign: "center" as "center",
  },
}
