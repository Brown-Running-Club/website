import * as React from "react"

import Layout from "../components/layout"
import TitleImage from "../components/title-image"
import KickoffImage from "../images/kickoff.png"
import theme from "../config/theme"

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <div>
      <TitleImage image={KickoffImage}>
        <p style={styles.titleText}>PAGE NOT FOUND</p>
      </TitleImage>
    </div>
  </Layout>
)

export default NotFoundPage

const styles = {
  titleText: {
    ...theme.typography.title,
    color: theme.palette.white,
    marginTop: theme.spacing.unit * 2,
    textShadow: "0 0 15px #000000, 0 0 10px #000000",
  },
}
