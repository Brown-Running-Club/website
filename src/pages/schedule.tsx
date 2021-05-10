import React from "react"
import TitleImage from "../components/title-image"
import CompetitiveImage from "../images/competitive.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import NarrowContainer from "../components/narrow-container"
import Button from "../components/button"
import Layout from "../components/layout"
import Season from "../components/season"
import Schedule from "../components/schedule"

export default () => (
  <Layout title="Schedule">
    <TitleImage image={CompetitiveImage}>
      <p style={styles.titleText}>SCHEDULE</p>
    </TitleImage>
    <PageBody>
      <WideContainer>
        <Card title="Practice" centeredTitle>
          <i>
            Currently, we are unable to practice due to Brown’s COVID-19 policies.
            We will update our club members when in person practices can resume.
          </i>
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
            All runs start and end at the Bear State outside the Nelson Fitness Center.
            Come anywhere from once to seven times a week; it’s up to you!
            For the competitive team, Tuesday and Saturday are generally organized workouts
            (Intervals, Speed Work, Hills, Tempo Runs, etc.), while Sunday is generally a Long Run.
            Other days are easy to moderate steady runs. We usually do not have practice
            on days we have races, so see our meet schedule below.
          </p>
        </Card>
        <Season season="Fall 2021" info="This schedule will be updated as more meets are planned."/>
      </WideContainer>
      <NarrowContainer>
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
      </NarrowContainer>
    </PageBody>
  </Layout>
)

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
