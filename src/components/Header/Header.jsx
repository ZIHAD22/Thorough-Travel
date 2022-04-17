import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import BrandHeader from "../BrandHeader/BrandHeader";

const Header = () => {
  return (
    <div>
      <BrandHeader />
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
