import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import HeroArea from "../HeroArea/HeroArea";
import "./BrandHeader.css";

const BrandHeader = () => {
  return (
    <div>
      <Navbar className="Brand" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">ThoroughTravel</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 text-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <div>
                <button className="btn Brand text-light border border-light">
                  SIGN UP/IN
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HeroArea />
    </div>
  );
};

export default BrandHeader;
