import React from "react"
import containerStyles from "../styles/container.module.scss"

export default function Container({ children }) {
  return (
    <div
      style={{
        margin: `3rem auto`,
        maxWidth: "1000px",
      }}
      className={containerStyles.container}
    >
      {children}
    </div>
  )
}
