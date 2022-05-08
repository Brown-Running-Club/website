import React from "react"
import TitleImage from "../components/title-image"
import Kickoff from "../images/kickoff.jpg"
import IvyBrownLogo from "../images/ivybrownlogo.png"
import theme from "../config/theme"
import Card from "../components/card"
import Button from "../components/button"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import NarrowContainer from "../components/narrow-container"
import Layout from "../components/layout"
import MeetHosting from "../components/meet-hosting"
import Schedule from "../components/schedule"
import MediaQuery from "react-responsive"
import { CurrentSeason } from "../components/season"

export default () => {
  const welcomeCard = (
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
        On Mondays and Wednesdays, we'll wait until 4:30PM to start running
        to accommodate 3-4:20PM classes.
      </p>
      <Button text="Learn more about Running Club ➞" link="/about" />
    </Card>
  );

  const scheduleCard = (
    <Card title="This Week" centeredTitle>
      <Schedule />
    </Card>
  );

  const strava = (
    <>
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
    </>
  );

  return (
    <Layout title={null}>
      <TitleImage image={Kickoff}>
        <img src={IvyBrownLogo} style={styles.titleImage} alt="brown" />
        <p style={styles.titleText}>RUNNING CLUB</p>
      </TitleImage>
      <PageBody>
        <WideContainer>
          {welcomeCard}
          <MeetHosting />
          <MediaQuery query="(min-width: 1150px)">
            <CurrentSeason/>
          </MediaQuery>
          <MediaQuery query="(max-width: 1149px)">
            {scheduleCard}
            <CurrentSeason/>
            {strava}
          </MediaQuery>
        </WideContainer>
        <MediaQuery query="(min-width: 1150px)">
          <NarrowContainer>
            {scheduleCard}
            {strava}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  );
}

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
}
