import React from "react"
import TitleImage from "../components/title-image"
import ScheduleImage from "../images/schedule.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import NarrowContainer from "../components/narrow-container"
import Button from "../components/button"
import Layout from "../components/layout"
import {CurrentSeason} from "../components/season"
import Schedule from "../components/schedule"
import MediaQuery from "react-responsive"

export default () => {
  const narrowContent = (
    <>
      <Card title="This Week" centeredTitle>
        <Schedule />
      </Card>
      <Card title="Previous" centeredTitle>
        <Button
          leftAlign
          text="Past Meet Schedules and Results ➞"
          link="/previous-seasons"
        />
      </Card>
    </>
  );

  return (
    <Layout title="Schedule">
      <TitleImage image={ScheduleImage}>
        <p style={styles.titleText}>SCHEDULE</p>
      </TitleImage>
      <PageBody>
        <WideContainer>
          <Card title="Practice" centeredTitle>
            <p>
              Our typical weekly schedule is below. See this week's schedule on the right.
            </p>
            <table>
              <tr>
                <th>Day</th>
                <th>Time</th>
              </tr>
              <tr>
                <td>Mon-Fri</td>
                <td>4:15pm</td>
              </tr>
              <tr>
                <td>Sat-Sun</td>
                <td>10am</td>
              </tr>
            </table>
            <p>
              On Mondays and Wednesdays, we'll wait until 4:30PM to start running
              to accommodate 3-4:20PM classes.
              All runs start and end at the Bear Statue outside the Nelson Fitness Center.
              Come anywhere from once to seven times a week; it’s up to you!
              For the competitive team, Tuesday and Thursday are generally organized workouts
              (Intervals, Speed Work, Hills, Tempo Runs, etc.), while Sunday is generally a Long Run.
              Other days are easy to moderate steady runs. We usually do not have practice
              on days we have races, so see our meet schedule below.
            </p>
          </Card>
          <CurrentSeason/>
          <MediaQuery query="(max-width: 1150px)">
            {narrowContent}
          </MediaQuery>
        </WideContainer>
        <MediaQuery query="(min-width: 1150px)">
          <NarrowContainer>
            {narrowContent}
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
  infoText: {
    ...(theme.typography.h4 as any),
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
  infoTextBottom: {
    ...(theme.typography.h4 as any),
    margin: 0,
  },
}
