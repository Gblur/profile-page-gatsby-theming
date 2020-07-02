import React from "react"

const Container = props => {
  return (
    <div
      style={{
        width: "70%",
        height: "90%",
        alignSelf: "center",
        justifySelf: "center",
      }}
      className={props.className}
    >
      {props.children}
    </div>
  )
}

export default Container
