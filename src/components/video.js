import React from "react"
import { graphql } from "gatsby"

const Video = ({ data }) => {
  const markdown = data
  console.log(markdown)

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: markdown.markdownRemark.html,
      }}
    />
  )
}

export default Video

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/videos.md/" }) {
      html
    }
  }
`
