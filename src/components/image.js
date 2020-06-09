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
            resize(width: 300, height: 168, grayscale: false) {
              src
            }
            fixed(fit: COVER, height: 200, width: 200) {
              src
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
        <h1>Photo Title</h1>
        <p>
          so much text that it should expend the border if you dont wrap it
          corectly
        </p>
        <img key={edge.node.id} src={edge.node.resize.src} onClick={() => {}} />
      </Container>
    )
  })
  return imageData
}
//
export default ImagesQuery
