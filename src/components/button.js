import React from "react"
import Button from "react-bootstrap/Button"

const ButtonStyle = {
  borderRadius: "5px",
  backgroundColor: "#3ea0a5f3",
  border: "none",
  marginTop: "3%",
  color: "#252525",
}

const ButtonThing = props => {
  return (
    <Button {...props} variant="info" size="lg" style={{ ButtonStyle }}>
      {props.children}
    </Button>
  )
}

export default ButtonThing
