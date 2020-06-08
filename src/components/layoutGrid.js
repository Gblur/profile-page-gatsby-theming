import React from "react"
import layoutStyle from "../styles/layout-grid.module.scss"

const LayoutGrid = props => {
  return (
    <div id={props.id}>
      <div className={layoutStyle.layoutGrid}>{props.children}</div>
    </div>
  )
}
export default LayoutGrid
