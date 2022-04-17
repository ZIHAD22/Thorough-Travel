import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroArea from "../HeroArea/HeroArea";
import "./BrandHeader.css";

const BrandHeader = () => {
  return (
    <div>
      <Navbar className="Brand" sticky="top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">ThoroughTravel</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 text-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-link mx-3" to="/">
                Home
              </Link>
              {/* <Link className="nav-link" to="/login">
                Log In
              </Link>
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link> */}
              <div>
                <Link
                  to="/signup"
                  className="btn Brand text-light border border-light"
                >
                  SIGN UP/IN
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BrandHeader;
