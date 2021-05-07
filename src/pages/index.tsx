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
import Schedule from "../components/schedule"

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
        <Card title="Announcements">
          <Button text="More announcements ➞" link="/announcements" />
        </Card>
      </WideContainer>
      <NarrowContainer>
        <Card title="This Week" centeredTitle>
          <Schedule />
        </Card>
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

export const styles = {
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
