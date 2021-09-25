import React from "react"
import CompetitiveImage from "../images/competitive.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import NarrowContainer from "../components/narrow-container"
import Button from "../components/button"
import Layout from "../components/layout"
import MediaQuery from "react-responsive"

export default () => {
  const infoCard = (
    <Card>
      <p style={styles.infoText}>
        We’re the place for competitive and recreational running at Brown
        University. Whether you’re an undergrad, grad student, faculty, or
        staff member, we encourage you to join us for a run. We welcome
        runners of all levels! For those interested in running
        competitively, we compete in cross country races, indoor and outdoor
        track meets, and road races. If you want to check us out, stop by
        for a run! Additionally, you can find out more by looking around
        here, joining our{" "}
        <a href="https://www.facebook.com/groups/260972757349158/">
          Facebook group
        </a>{" "}
        or shooting us an email at run@brown.edu.
      </p>
      <p style={styles.infoTextBottom}>
        We meet up at the bear statue outside the Nelson Fitness Center
        every day of the week during the academic year, at 4:15pm on
        weekdays and 10:00am on weekends. On Mondays and Wednesdays, we'll
        wait until 4:30pm to start running to accommodate 3-4:20pm classes.
      </p>
    </Card>
  );
  const moreInfoCard = (
    <Card title="More Info" centeredTitle>
      <Button
        leftAlign
        text="Recent Running Club announcements ➞"
        link="/announcements"
      />
      <Button leftAlign text="Running Club FAQ ➞" link="/faq" />
      <Button
        leftAlign
        text="Learn about the competitive team ➞"
        link="/competitive"
      />
      <Button
        leftAlign
        text="Learn about the current leadership team ➞"
        link="/leadership"
      />
    </Card>
  );
  return (
    <Layout title="About" image={CompetitiveImage}>
      <PageBody>
        <WideContainer>
          {infoCard}
          <MediaQuery query="(max-width: 1149px)">
            {moreInfoCard}
          </MediaQuery>
        </WideContainer>
        <MediaQuery query="(min-width: 1150px)">
          <NarrowContainer>
            {moreInfoCard}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  );
}

const styles = {
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
