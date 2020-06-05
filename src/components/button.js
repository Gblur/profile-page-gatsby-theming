import React from "react"
import Button from "react-bootstrap/Button"

const ButtonThing = props => {
  return (
    <Button {...props} size="lg" style={({ ...props }, { borderRadius: "10em" })}>
      {props.children}
    </Button>
  )
}

export default ButtonThing
