import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container"

const ImagesQuery = props => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            resize(width: 300, height: 168, grayscale: true) {
              src
            }
            fluid(
              cropFocus: CENTER
              maxHeight: 480
              maxWidth: 640
              grayscale: true
              srcSetBreakpoints: [200, 320, 540]
            ) {
              src
              originalName
            }
          }
        }
      }
    }
  `)

  console.log(data)

  const imageData = data.allImageSharp.edges.map(edge => {
    return (
      <Container>
        <h2>{edge.node.fluid.originalName.split([".jpg"])}</h2>
        <p>
          so much text that it should expend the border if you dont wrap it
          corectly
        </p>
        <Img
          key={edge.node.id}
          fluid={edge.node.fluid.src}
          onClick={() => {}}
        />
      </Container>
    )
  })
  return imageData
}
//
export default ImagesQuery
