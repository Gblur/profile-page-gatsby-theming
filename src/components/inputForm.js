import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function FormInput() {
  return (
    <Form
      method="post"
      action="#"
      style={{
        margin: "0px auto",
        maxWidth: "800px",
        border: "2px solid gray",
        borderRadius: "5px",
        padding: "10px",
        backgroundColor: "rgba(255,255,255,0.8)",
      }}
    >
      <h1 style={{ textAlign: "center", borderBottom: "3px solid gray" }}>
        Contact Form
      </h1>

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
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button size="lg" style={{ backgroundColor: "red" }} type="reset">
          Reset
        </Button>
        <Button size="lg" type="submit">
          Send
        </Button>
      </div>
    </Form>
  )
}
