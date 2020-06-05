import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
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
      <div></div>
      <FormInput />
    </Layout>
  )
}
