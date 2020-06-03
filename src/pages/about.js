import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/navbar"

export default function Contact({ data }) {
  return (
    <Layout>
      <div>
        <h1>About: {data.site.siteMetadata.title}</h1>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
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
