import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import ServiceItem from "../ServiceItem/ServiceItem";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <div className="my-5">
      <Container>
        <h1 className="text-center my-5">
          SPECIAL SERVICES{" "}
          <i>
            <strong className="for-you">JUST FOR YOU</strong>
          </i>
        </h1>
        <Row>
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
