import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { MarkdownFrontmatter } from "../pages/{MarkdownRemark.frontmatter__slug}"

type Data = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: MarkdownFrontmatter
      }
    }[]
  }
}

const Announcements = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { slug: { glob: "/announcements/*" } } }
            limit: 5
            skip: 0
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
  )
}
export default Announcements

export function Announcement(data: MarkdownFrontmatter) {
  const title = data.title
  return (
    <article key={data.slug}>
      <header>
        <h3>
          <Link style={{ boxShadow: `none` }} to={data.slug}>
            {title}
          </Link>
        </h3>
        <small>{data.date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: data.description,
          }}
        />
      </section>
    </article>
  )
}
