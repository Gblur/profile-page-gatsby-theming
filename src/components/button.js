import React from "react"
import Button from "react-bootstrap/Button"

const ButtonStyle = {
  borderRadius: "10em",
}

const ButtonThing = props => {
  return (
    <Button {...props} size="lg" style={{ ...ButtonStyle, ...props.style }}>
      {props.children}
    </Button>
  )
}

export default ButtonThing
