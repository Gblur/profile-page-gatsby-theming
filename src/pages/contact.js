import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/navbar"

export default function Contact() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Layout>
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <h1>{data.site.siteMetadata.title}</h1>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}
