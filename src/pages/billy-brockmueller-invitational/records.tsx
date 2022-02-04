import React from "react"
import Omac from "../../images/omac.jpg"
import theme from "../../config/theme"
import PageBody from "../../components/page-body"
import WideContainer from "../../components/wide-container"
import Layout from "../../components/layout"
import Records from "../../components/records"

export default () => (
  <Layout title="Billy Brockmueller Invitational Records" image={Omac}>
    <PageBody>
      <WideContainer>
        <Records raceType="Billy Brockmueller Invitational" />
      </WideContainer>
    </PageBody>
  </Layout>
)
