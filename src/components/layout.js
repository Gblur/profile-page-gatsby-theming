import React from "react"

const Layout = props => {
  return (
    <div id={props.id}>
      <div className={props.className} style={props.style}>
        {props.children}
      </div>
    </div>
  )
}
export default Layout
