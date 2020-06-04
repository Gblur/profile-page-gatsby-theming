import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/navbar"
import FormInput from "../components/inputForm"

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
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <FormInput />
      </div>
    </Layout>
  )
}
