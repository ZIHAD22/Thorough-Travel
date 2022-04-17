import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceItem = ({ service: { img, desc, name, price } }) => {
  return (
    <div className="col-md-4">
      <Card className="shadow-lg border rounded-3" style={{ width: "100%" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h5>Price: ${price}</h5>
            {desc}
          </Card.Text>
          <Button variant="primary d-block mx-auto">Book Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceItem;
