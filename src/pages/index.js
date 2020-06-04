import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"
import Layout from "../components/navbar"
import { graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"

export default function Home({ data }) {
  return (
    <ParallaxProvider>
      <div>
        <Layout>
          <Container>
            <Header headerText="Hello world! See more by visiting Github.com and check out that repo if you want" />
            <Link to="/contact/">Contact</Link>
            <p>send us a message</p>
          </Container>
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
        <Footer />
      </div>
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
