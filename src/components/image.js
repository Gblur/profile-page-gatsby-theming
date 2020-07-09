import React from "react"

const ImagesQuery = props => {
  return (
    <div onClick={props.onClick}>
      <img style={{ width: "100%" }} key={props.id} src={props.src} {...props}>
        {props.children}
      </img>
    </div>
  )
}

export default ImagesQuery
