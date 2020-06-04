import React from "react"
import Form from "react-bootstrap/Form"

export default function FormInput() {
  return (
    <Form style={{ margin: "0px auto", maxWidth: "600px" }}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formGroupMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          style={{ height: "300px" }}
          as="textarea"
          aria-label="With textarea"
        />
      </Form.Group>
    </Form>
  )
}
