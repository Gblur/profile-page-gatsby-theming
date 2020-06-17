import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Contact({ data }) {
  return <Layout></Layout>
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
