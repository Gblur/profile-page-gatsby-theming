import React from "react"
import { Parallax } from "react-scroll-parallax"

const ParallaxImage = props => {
  return (
    <Parallax className="custom-class" y={props.yOffsets} tagInner="figure">
      {props.children}
    </Parallax>
  )
}

export default ParallaxImage
