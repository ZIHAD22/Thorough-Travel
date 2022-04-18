import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ConfirmCheckOut = () => {
  const { name } = useParams();

  const navigate = useNavigate();

  const hadnleConfimeCheckOut = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center align-items-center spinner-div">
      <div className="my-3">
        <h1 className="text-center">Thank You For The Booking {name}</h1>
        <Button
          onClick={hadnleConfimeCheckOut}
          className="mx-auto d-block"
          variant="link"
        >
          Go To Home Page
        </Button>
      </div>
    </div>
  );
};

export default ConfirmCheckOut;
