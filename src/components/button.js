import React from "react"
import Button from "react-bootstrap/Button"

const ButtonThing = props => {
  return (
    <Button {...props} size="lg" style={{ borderRadius: "5%" }}>
      {props.children}
    </Button>
  )
}

export default ButtonThing
