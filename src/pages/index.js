import React from "react"
import "../styles/index.scss"
import { Link } from "gatsby"
import Container from "../components/container"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"
import Footer from "../components/footer"
import ButtonThing from "../components/button"

export default function Home({ data }) {
  console.log(data)
  return (
    <ParallaxProvider>
      <div>
        <div style={{ height: "100vh" }}>
          <h1>Welcome</h1>
          <p>please feel free to visit this site </p>
          <ButtonThing>Get Started</ButtonThing>
        </div>
        <Layout>
          <Container>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
              </div>
            ))}
          </Container>
          <Footer />
        </Layout>
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
          html
        }
      }
    }
  }
`
