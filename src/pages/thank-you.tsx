import React from "react"
import TitleImage from "../images/thank-you.png"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import Layout from "../components/layout"

export default () => (
  <Layout title="Thank you!" image={TitleImage}>
    <PageBody>
      <WideContainer>
        <Card>
          <p style={styles.infoText}>
            Thank you for your donation! We really appreciate your generosity.
            It will help us both attend competitions and hold events as a team,
            while remaining accessible regardless of a runner's financial background.
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
    marginBottom: theme.spacing.unit * 2,
  },
}
