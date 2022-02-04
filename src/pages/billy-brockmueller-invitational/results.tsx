import React from "react"
import Omac from "../../images/omac.jpg"
import theme from "../../config/theme"
import PageBody from "../../components/page-body"
import WideContainer from "../../components/wide-container"
import Layout from "../../components/layout"
import Results from "../../components/billy-brockmueller-invitational/results"

export default () => (
  <Layout title="Billy Brockmueller Invitational Results" image={Omac}>
    <PageBody>
      <WideContainer>
        <Results />
      </WideContainer>
    </PageBody>
  </Layout>
)
