import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TitleImage from "../components/title-image"
import Kickoff from "../images/kickoff.png"
import theme from "../config/theme"
import PageBody from "../components/page-body"

export type MarkdownFrontmatter = {
  slug: string
  date: string
  title: string
  description: string
}
type MarkdownData = {
  markdownRemark: {
    frontmatter: MarkdownFrontmatter
    html: string
  }
}

export default function Template({ data }: { data: MarkdownData }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={frontmatter.title}>
      <TitleImage image={Kickoff}>
        <p style={styles.titleText}>{frontmatter.title}</p>
      </TitleImage>
      <PageBody>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PageBody>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

const styles = {
  titleText: {
    ...theme.typography.title,
    color: theme.palette.white,
    marginTop: theme.spacing.unit * 2,
    textShadow: "0 0 15px #000000, 0 0 10px #000000",
  },
}
