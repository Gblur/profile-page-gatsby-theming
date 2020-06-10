import React from "react"
import "../styles/layout-grid.scss"

const LayoutGrid = props => {
  return (
    <div id={props.id}>
      <div className="layout-grid">{props.children}</div>
    </div>
  )
}
export default LayoutGrid
