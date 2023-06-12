import React from "react";
import "./login.styles.css";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="form-container container">
      <div className="form">
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="*********" />
        </Form.Group>

        <div className="mt-3 d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
