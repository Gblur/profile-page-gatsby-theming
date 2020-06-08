import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Contact({ data }) {
  return <Layout>
    
  </Layout>
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
