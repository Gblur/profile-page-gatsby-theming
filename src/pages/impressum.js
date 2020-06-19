import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Contact({ data }) {
  return (
    <Layout>
      {data.markdownRemark.frontmatter.title}
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/impressum.md/" }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`
