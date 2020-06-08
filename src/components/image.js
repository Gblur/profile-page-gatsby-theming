import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// const ImagesQuery = props => {
//   const data = useStaticQuery(graphql`
//     query {
//       file(relativePath: { eq: "Logo.svg" }) {
//         childImageSharp {
//           # Specify a fluid image and fragment
//           # The default maxWidth is 800 pixels
//           fluid {
//             ...GatsbyImageSharpFluid_tracedSVG
//           }
//         }
//       }
//     }
//   `)
//   console.log(data)

//   return (
//     <div>
//       <Img
//         fluid={data.file.childImageSharp.fluid}
//         alt="Cat taking up an entire chair"
//         fadeIn={false}
//         className="customImg"
//         onLoad={() => {
//           // do loading stuff
//         }}
//         onStartLoad={({ wasCached }) => {
//           // do stuff on start of loading
//           // optionally with the wasCached boolean parameter
//         }}
//         onError={error => {
//           // do error stuff
//         }}
//         Tag="custom-image"
//         loading="eager"
//       />
//     </div>
//   )
// }

// export default ImagesQuery
