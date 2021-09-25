import React from "react"
import PageBody from "../components/page-body"
import Layout from "../components/layout"
import MediaQuery from "react-responsive"

export default () => (
  <Layout title="Contact">
    <PageBody>
      <div>
        <MediaQuery minWidth="640px">
          <iframe
            title="contact"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfZwHmQDJBEbp__naoK5t5Ua7ql2xlXOBj_f7rfokcZW0H5WA/viewform?embedded=true"
            width="640"
            height="1000"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </MediaQuery>
        <MediaQuery minWidth="480px" maxWidth="639px">
          <iframe
            title="contact"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfZwHmQDJBEbp__naoK5t5Ua7ql2xlXOBj_f7rfokcZW0H5WA/viewform?embedded=true"
            width="480"
            height="1000"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </MediaQuery>
        <MediaQuery minWidth="350px" maxWidth="479px">
          <iframe
            title="contact"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfZwHmQDJBEbp__naoK5t5Ua7ql2xlXOBj_f7rfokcZW0H5WA/viewform?embedded=true"
            width="350"
            height="1000"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </MediaQuery>
      </div>
    </PageBody>
  </Layout>
)
