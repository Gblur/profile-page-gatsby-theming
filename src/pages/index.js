import React from "react"
import "../styles/index.scss"
import { Link } from "gatsby"
import Container from "../components/container"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"

export default function Home({ data }) {
  return (
    <ParallaxProvider>
      <Layout>
        <Container>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h1>{node.frontmatter.title}</h1>
              <p>{node.frontmatter.date}</p>
              {node.excerpt}
            </div>
          ))}
        </Container>
      </Layout>
    </ParallaxProvider>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
