import React from "react"
import containerStyles from "../styles/container.module.scss"

export default function Container({ children }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      className={containerStyles.container}
    >
      {children}
    </div>
  )
}
