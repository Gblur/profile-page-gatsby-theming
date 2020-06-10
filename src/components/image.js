import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container"
import PropTypes from "prop-types"

const ImagesQuery = props => {
  return (
    <div className={props.className}>
      <h2>Title</h2>
      <p>
        so much text that it should expend the border if you dont wrap it
        corectly
      </p>
      <Img key={props.id} fluid={props.fluid} fadeIn={true} {...props} />
    </div>
  )
}

ImagesQuery.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ImagesQuery
