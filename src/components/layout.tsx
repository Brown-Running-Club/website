import React from "react"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import Seo from "./seo"
import theme from "../config/theme"
import TitleImage from "../components/title-image"

type Props = { children: any; title: string | null; image?: any }

const Layout = ({ children, title, image }: Props) => (
  <>
    <Header />
    <div>
      <main>
        <Seo title={title} />
        { image ? (
          <TitleImage image={image}>
            <p style={styles.titleText}>{title.toUpperCase()}</p>
          </TitleImage>
          ) : <></>
        }
        {children}
      </main>
    </div>
    <Footer />
  </>
)
export default Layout

const styles = {
  titleText: {
    ...theme.typography.title,
    color: theme.palette.white,
    marginTop: theme.spacing.unit * 2,
    textShadow: "0 0 15px #000000, 0 0 10px #000000",
  }
}
