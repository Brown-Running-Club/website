import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import KickoffImage from "../images/kickoff.jpg"

export default () => (
  <Layout title="404: Page Not Found" image={KickoffImage} />
)

export const Head = () => <Seo title="404: Page Not Found" />
