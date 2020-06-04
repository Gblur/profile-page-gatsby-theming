import React from "react"
import { Link } from "gatsby"
import headerModule from "../styles/header.module.scss"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Header(props) {
  return (
    <header className={headerModule.header} style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none` }}>
        Home
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/my-files/">Files</ListLink>
      </ul>
    </header>
  )
}
