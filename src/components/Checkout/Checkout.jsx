import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useInputValue from "../../hooks/useInputvalue";

const Checkout = () => {
  const { handleInputBlur, name, email, address, phoneNumber } =
    useInputValue();

  const navegate = useNavigate();

  const handleCheckOut = (e) => {
    e.preventDefault();
    if (name && email && address && phoneNumber) {
      navegate(`/checkout/confirm-checkout/${name}`);
    } else {
      toast.warn("Please Provide All Information Below");
    }
  };
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-4">CheckOut Details</h1>
        <Form onSubmit={handleCheckOut}>
          <div className="row my-2">
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onBlur={handleInputBlur}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onBlur={handleInputBlur}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="address"
                  onBlur={handleInputBlur}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Phone Number"
                  name="phoneNumber"
                  onBlur={handleInputBlur}
                />
              </Form.Group>
            </div>
            <Button
              className="d-block mx-auto my-4 btn-color border-0 w-50"
              variant="primary"
              type="submit"
            >
              Check Out
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
