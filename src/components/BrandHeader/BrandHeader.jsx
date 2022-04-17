import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { CurrencyDollarIcon } from "@heroicons/react/solid";
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
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="d-flex align-items-center ">
                <NavDropdown
                  className="brand-text"
                  title="Dollar"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Dollar</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Europe</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Yen</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="brand-text"
                  title="English"
                  id="navbarScrollingDropdown2"
                >
                  <NavDropdown.Item href="#action3">English</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">France</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Japanese</NavDropdown.Item>
                </NavDropdown>
                <div>
                  <button className="btn Brand text-light border border-light">
                    SIGN UP/IN
                  </button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BrandHeader;
