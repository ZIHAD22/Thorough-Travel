import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ServiceItem = ({ service: { img, desc, name, price, id } }) => {
  const navigate = useNavigate();
  const handleBooking = (e) => {
    e.preventDefault();
    navigate(`/checkout/${id}`);
  };
  return (
    <div className="col-md-4">
      <Card className="shadow-lg border rounded-3" style={{ width: "100%" }}>
        <div className="m-2">
          <Card.Img variant="top" src={img} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h4>Price: ${price}</h4>
            {desc.length > 200 ? desc.slice(0, 200) + "..." : desc}
          </Card.Text>
          <Button onClick={handleBooking} variant="primary d-block mx-auto">
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceItem;
