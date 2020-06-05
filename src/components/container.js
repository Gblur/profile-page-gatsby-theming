import React from "react"
import containerStyles from "../styles/container.module.scss"

export default function Container({ children }) {
  return (
    <div
      style={{
        margin: `3rem auto`,
        width: "100%",
        maxWidth: "800px",
      }}
      className={containerStyles.container}
    >
      {children}
    </div>
  )
}
