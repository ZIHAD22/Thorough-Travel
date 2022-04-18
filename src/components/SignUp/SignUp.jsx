import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInputValue from "../../hooks/useInputvalue";
import traveler from "../../images/traveler.png";
import OptionalSignUp from "../OptionalSignUp/OptionalSignUp";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../firebase.init";
import "./SignUp.css";
import Loading from "../Loading/Loading";

const SignUp = () => {
  // handle input value
  const { handleInputBlur, name, email, password, confirmPassword, agree } =
    useInputValue();

  // handle custom email and password sign up
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });

  // handle submit
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password && confirmPassword && agree) {
      if (agree) {
        if (password === confirmPassword) {
          await createUserWithEmailAndPassword(email, password);
        } else {
          toast.warn("Your Password and Confirm Password didn't match");
        }
      }
    }

    if (error) {
      return toast.warning(error.message);
    }
    if (user) {
      return toast.success("Sign Up Successful");
    }
  };
  return (
    <div>
      <Container>
        <Row className="">
          <Col xs={6} className="my-auto">
            <img src={traveler} alt="" />
          </Col>
          <Col xs={6} className="my-auto">
            <Form
              onSubmit={handleSignUpSubmit}
              className="shadow p-5 mt-5 mb-5"
            >
              <h2 className="text-center mb-3">Sign Up</h2>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  onBlur={handleInputBlur}
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onBlur={handleInputBlur}
                  name="email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onBlur={handleInputBlur}
                  name="password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  onBlur={handleInputBlur}
                  name="confirmPassword"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I Agree with the trams and condition"
                  onBlur={handleInputBlur}
                  name="agree"
                  required
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
        <ToastContainer />
      </Container>
    </div>
  );
};

export default SignUp;
