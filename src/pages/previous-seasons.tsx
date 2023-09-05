import React from "react"
import TitleImage from "../components/title-image"
import HeaderImage from "../images/previous-seasons.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import Layout from "../components/layout"
import Season from "../components/season"

export default () => (
  <Layout title="Previous Schedules and Results">
    <TitleImage image={HeaderImage}>
      <p style={styles.titleText}>PREVIOUS SCHEDULES AND RESULTS</p>
    </TitleImage>
    <PageBody>
      <WideContainer>
        <Season season="Spring 2023" />
        <Season season="Fall 2022" />
        <Season season="Spring 2022" />
        <Season season="Fall 2021" />
        <Card title="Spring 2021" centeredTitle>
          <p>We were unable to compete in Spring 2021 due to COVID-19.</p>
        </Card>
        <Card title="Fall 2020" centeredTitle>
          <p>We were unable to compete in Fall 2020 due to COVID-19.</p>
        </Card>
        <Season season="Spring 2020" info="The rest of our Spring 2020 season was cancelled due to COVID-19."/>
        <Season season="Fall 2019" />
        <Season season="Spring 2019" />
        <Season season="Fall 2018" />
        <Season season="Spring 2018" />
        <Season season="Fall 2017" />
      </WideContainer>
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
