import React from "react"
import PageBody from "../components/page-body"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <PageBody>
      <div>
        <iframe
          title="calendar"
          src="https://calendar.google.com/calendar/embed?mode=WEEK&amp;src=run%40brown.edu&amp;ctz=America%2FNew_York"
          width="1200"
          height="800"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </PageBody>
  </Layout>
)
