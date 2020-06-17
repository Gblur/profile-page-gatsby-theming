import React from "react"
import Img from "gatsby-image"
import Container from "./container"

const ImagesQuery = props => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <Container>
        <img
          style={{ width: "100%" }}
          key={props.id}
          src={props.src}
          {...props}
        >
          {props.children}
        </img>
      </Container>
    </div>
  )
}

export default ImagesQuery
