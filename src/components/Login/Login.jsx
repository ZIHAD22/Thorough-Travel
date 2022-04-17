import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import traveler from "../../images/traveler.png";
import OptionalSignUp from "../OptionalSignUp/OptionalSignUp";
const Login = () => {
  return (
    <div>
      <Container>
        <Row className="">
          <Col xs={6} className="my-auto">
            <img src={traveler} alt="" />
          </Col>
          <Col xs={6} className="my-auto">
            <Form className="shadow p-5 mt-5 mb-5">
              <h2 className="text-center mb-3">Sign in</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button
                className="d-block mx-auto btn-color border-0 w-50"
                variant="primary"
                type="submit"
              >
                Log
              </Button>
              <OptionalSignUp />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
