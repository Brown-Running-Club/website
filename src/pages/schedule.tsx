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

export default () => (
  <Layout title="Schedule">
    <TitleImage image={CompetitiveImage}>
      <p style={styles.titleText}>SCHEDULE</p>
    </TitleImage>
    <PageBody>
      <WideContainer>
        <Card>
          <Season season="Fall 2021" info="This schedule will be updated as more meets are planned."/>
        </Card>
      </WideContainer>
      <NarrowContainer>
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
