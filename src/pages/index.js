import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Home() {
  return (
    <Container>
      <Header headerText="Hello world!" />
      <Link to="/contact/">Contact</Link>
      <p>send us a message</p>
    </Container>
  )
}
