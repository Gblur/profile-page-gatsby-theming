import React from "react"
import layoutStyle from "../styles/layout.module.scss"

import Header from "../components/header"

const Layout = props => {
  return (
    <div id={props.id}>
      <Header />
      <div className={layoutStyle.layout}>{props.children}</div>
    </div>
  )
}
export default Layout
