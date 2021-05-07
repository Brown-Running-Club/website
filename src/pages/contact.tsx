import React from "react"
import PageBody from "../components/page-body"
import Layout from "../components/layout"

export default () => (
  <Layout title="Contact">
    <PageBody>
      <div>
        <iframe
          title="contact"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfZwHmQDJBEbp__naoK5t5Ua7ql2xlXOBj_f7rfokcZW0H5WA/viewform?embedded=true"
          width="640"
          height="592"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </PageBody>
  </Layout>
)
