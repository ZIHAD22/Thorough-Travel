import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import trevaler from "../../images/traveler.png";
import OptionalSignUp from "../OptionalSignUp/OptionalSignUp";
import "./SignUp.css";

const SignUp = () => {
  // className="w-50 mx-auto mt-5"
  return (
    <div>
      <Container>
        <Row className="">
          <Col xs={6} className="my-auto">
            <img src={trevaler} alt="" />
          </Col>
          <Col xs={6} className="my-auto">
            <Form className="shadow p-5 mt-5 mb-5">
              <h2 className="text-center mb-3">Sign Up</h2>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
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
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I Agree with the trams and condition"
                />
              </Form.Group>
              <div className="my-2">
                Already have an account? <Link to="/login">Login here</Link>
              </div>
              <Button
                className="d-block mx-auto btn-color border-0 w-50"
                variant="primary"
                type="submit"
              >
                Sign Up
              </Button>
              <OptionalSignUp />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
