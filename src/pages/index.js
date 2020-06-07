import React from "react"
import "../styles/index.scss"
import Container from "../components/container"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import ParallaxImage from "../components/parallax"
import Footer from "../components/footer"
import ButtonThing from "../components/button"

const yOffsets = {
  stripes50: [-10, 10],
  stripes100: [-70, 30],
  circles75: [-75, 60],
}

export default function Home({ data }) {
  console.log(data)
  return (
    <ParallaxProvider>
      <div>
        <div
          className="title"
          style={{
            position: "absolute",
            top: "32vh",
            left: "38vw",
            zIndex: "2",
          }}
        >
          <h1>Welcome</h1>
          <p>please feel free to visit this site </p>
          <ButtonThing
            onClick={() => {
              document.getElementById("ContainerId").scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            Get Started
          </ButtonThing>
        </div>
        <ParallaxImage yOffsets={yOffsets.stripes50}>
          <div className="stripes-50" />
        </ParallaxImage>
        <ParallaxImage yOffsets={yOffsets.circles75}>
          <div className="circles-75" />
        </ParallaxImage>
        <ParallaxImage yOffsets={yOffsets.stripes100}>
          <div className="stripes-100" />
        </ParallaxImage>

        <Layout id="ContainerId">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Container>
              <div key={node.id}>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
              </div>
            </Container>
          ))}
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
          html
        }
      }
    }
  }
`
