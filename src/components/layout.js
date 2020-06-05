import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
