import React from "react"
import layoutStyle from "../styles/layout.module.scss"

import Header from "../components/header"

const Layout = props => {
  return (
    <div id={props.id}>
      <Header />
      <div className={layoutStyle.layout} style={props.style}>
        {props.children}
      </div>
    </div>
  )
}
export default Layout
