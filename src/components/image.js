import React from "react"
import Img from "gatsby-image"

const ImagesQuery = props => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <img style={{ width: "100%" }} key={props.id} src={props.src} {...props}>
        {props.children}
      </img>
    </div>
  )
}

export default ImagesQuery
