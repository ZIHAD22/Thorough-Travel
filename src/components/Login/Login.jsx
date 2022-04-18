import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import traveler from "../../images/traveler.png";
import useInputValue from "../../hooks/useInputvalue";
import OptionalSignUp from "../OptionalSignUp/OptionalSignUp";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

const Login = () => {
  // reset password
  const [resetPassword, setResetPassword] = useState("");
  const [sendPasswordResetEmail, sending, resetPasswrodError] =
    useSendPasswordResetEmail(auth);

  // authintication
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // input values
  const { handleInputBlur, email, password } = useInputValue();

  // handle custom email and password login
  const [signInWithEmailAndPassword, loginUser, loading, loginError] =
    useSignInWithEmailAndPassword(auth);

  if (loading || sending) {
    return <Loading />;
  }

  if (loginUser) {
    navigate(from, { replace: true });
    return toast.success("Login Successful");
  }

  // handle submit on login
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      signInWithEmailAndPassword(email, password).then(() => {});
    } else {
      return toast.warn("Please Provide Email and Password");
    }

    if (loginError) {
      toast.warning(loginError.message);
    }

    if (loginUser) {
    }
  };

  // handle password reset
  const handlePsswordReset = async (e) => {
    e.preventDefault();
    if (email) {
      await sendPasswordResetEmail(email);
      return toast.success("Password Reset Email Send");
    } else {
      return toast.warning("Please Provide Your Email");
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
              <div className="d-flex justify-content-between align-items-center">
                <div className="mt-2 mb-3">
                  Not Sign Up? <Link to="/signup">Sign Up here</Link>
                </div>
                <div className="mt-2 mb-3">
                  <Button onClick={handlePsswordReset} variant="link">
                    Forget Password?
                  </Button>
                </div>
              </div>
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
