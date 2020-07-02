import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import ButtonThing from "../components/button"
import layoutModule from "../styles/layout.module.scss"

export default function Impressum({ data }) {
  return (
    <div>
      <Layout className={layoutModule.layout}>
        {data.markdownRemark.frontmatter.title}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexShrink: 1,
            width: "100%",
          }}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
        <ButtonThing href="/">Get back</ButtonThing>
      </Layout>
      <Footer />
    </div>
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
