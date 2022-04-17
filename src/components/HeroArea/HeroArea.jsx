import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import traveler from "../../images/traveler.png";
import { TrendingUpIcon } from "@heroicons/react/solid";
import "./HeroArea.css";

const HeroArea = () => {
  return (
    <div className="hero-area">
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <h1>Travel Is The Best Habbet In The World</h1>
            <p>
              Hi I am Zihad and your tour guide. You Can travel In any where
              that you want
            </p>
            <a href="/" className="btn btn-bg">
              Book A Trip <TrendingUpIcon className="book-icon" />
            </a>
          </Col>
          <Col md={6} className="my-auto">
            <img className="w-100" src={traveler} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroArea;
