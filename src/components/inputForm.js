import React from "react"
import Form from "react-bootstrap/Form"
import ButtonThing from "../components/button"

export default function FormInput() {
  return (
    <Form
      method="post"
      action="#"
      style={{
        width: "80%",
        borderRadius: "5px",
        padding: "21px",
        backgroundColor: "rgba(25, 0, 95, 0.425)",
        boxShadow: "0px 0px 15px",
      }}
    >
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group controlId="formGroupSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="subject" placeholder="Enter Subject" />
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
        <ButtonThing style={{ backgroundColor: "red" }} type="reset">
          Reset
        </ButtonThing>
        <ButtonThing type="submit">Send</ButtonThing>
      </div>
    </Form>
  )
}
