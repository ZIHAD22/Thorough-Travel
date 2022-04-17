import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceItem = ({ service: { img, desc, name, price } }) => {
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
            {desc}
          </Card.Text>
          <Button variant="primary d-block mx-auto">Book Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceItem;
