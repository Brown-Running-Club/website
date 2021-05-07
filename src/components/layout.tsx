/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import "./layout.css"
import Seo from "./seo"

type Props = { children: any; title: string | null }

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Header />
      <div>
        <main>
          <Seo title={title} />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
