import React from "react"
import Img from "gatsby-image"
import Container from "../components/container"
import PropTypes from "prop-types"

const ImagesQuery = props => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <Container>
        <Img key={props.id} fluid={props.fluid} {...props}>
          {props.children}
        </Img>
      </Container>
    </div>
  )
}

export default ImagesQuery
