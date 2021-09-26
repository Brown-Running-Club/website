import React from "react"
import Kickoff from "../../images/kickoff.jpg"
import theme from "../../config/theme"
import Card from "../../components/card"
import PageBody from "../../components/page-body"
import WideContainer from "../../components/wide-container"
import Layout from "../../components/layout"

export default () => (
  <Layout title="Brown Bear Invitational Results" image={Kickoff}>
    <PageBody>
      <WideContainer>
        <Card title="2021">
          <a href="2021/overall-women.html">Overall Women</a>
          <a href="2021/overall-men.html">Overall Men</a>
          <a href="2021/nirca-women.html">NIRCA Women</a>
          <a href="2021/nirca-men.html">NIRCA Men</a>
          <a href="2021/usatf-teams-women.html">USATF Teams Women</a>
          <a href="2021/usatf-teams-men.html">USATF Teams Men</a>
        </Card>
      </WideContainer>
    </PageBody>
  </Layout>
)

const styles = {
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
    width: theme.spacing.unit * 7,
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
  videoContainer: {
    position: 'relative' as const,
    width: '100%',
    height: 0,
    paddingBottom: '56.25%',
  },
  video: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 'auto'
  }
}
