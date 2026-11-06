/**
 * Page <head> tags. Each page renders this from its `Head` export:
 *
 *   export const Head = () => <Seo title="About" />
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  title: string | null
  description?: string
}

function Seo({ title, description }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const socialTitle = title ?? defaultTitle

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  )
}

export default Seo
