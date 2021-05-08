import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MarkdownFrontmatter } from "../pages/{MarkdownRemark.frontmatter__slug}"
import { Announcement } from "../components/announcements"
import Layout from "../components/layout"
import PageBody from "../components/page-body"

type Data = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: MarkdownFrontmatter
      }
    }[]
  }
}

const Announcements = () => (
  <Layout title="Announcements">
    <PageBody>
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              filter: { frontmatter: { slug: { glob: "/announcements/*" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    title
                    description
                  }
                }
              }
            }
          }
        `}
        render={(data: Data) => (
          <>
            {data.allMarkdownRemark.edges.map(data =>
              Announcement(data.node.frontmatter)
            )}
          </>
        )}
      />
    </PageBody>
  </Layout>
)

export default Announcements
