import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import traveler from "../../images/traveler.png";
import useInputValue from "../../hooks/useInputvalue";
import OptionalSignUp from "../OptionalSignUp/OptionalSignUp";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Loading/Loading";

const Login = () => {
  // input values
  const { handleInputBlur, email, password } = useInputValue();

  // handle custom email and password login
  const [signInWithEmailAndPassword, loginUser, loading, loginError] =
    useSignInWithEmailAndPassword(auth);

  // handle submit on login
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      signInWithEmailAndPassword(email, password);
    } else {
      return toast.warn("Please Provide Email and Password");
    }

    if (loginError) {
      toast.warning(loginError.message);
    }

    if (loginUser) {
      toast.success("Login Successful");
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
            <Form className="shadow p-5 mt-5 mb-5" onSubmit={handleSubmitLogin}>
              <h2 className="text-center mb-3">Sign in</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onBlur={handleInputBlur}
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
                  name="password"
                  onBlur={handleInputBlur}
                />
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
        <ToastContainer />
      </Container>
    </div>
  );
};

export default Login;
