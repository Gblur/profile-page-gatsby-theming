import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ImagesQuery = props => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            resize(width: 160, height: 90, grayscale: false) {
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

  return (
    <div>
      {data.allImageSharp.edges.map(edge => {
        return <img id={edge.node.id} src={edge.node.resize.src} />
      })}
    </div>
  )
}
//
export default ImagesQuery
