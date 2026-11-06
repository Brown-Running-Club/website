import React from "react"
import BrownStadium from "../../images/brown-stadium.jpg"
import PageBody from "../../components/page-body"
import WideContainer from "../../components/wide-container"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Results from "../../components/brunos-backyard-classic/results"

export default () => (
  <Layout title="Bruno's Backyard Classic Results" image={BrownStadium}>
    <PageBody>
      <WideContainer>
        <Results />
      </WideContainer>
    </PageBody>
  </Layout>
)

export const Head = () => <Seo title="Bruno's Backyard Classic Results" />
