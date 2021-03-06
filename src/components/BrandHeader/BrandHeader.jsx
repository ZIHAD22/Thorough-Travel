import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import HeroArea from "../HeroArea/HeroArea";
import "./BrandHeader.css";

const BrandHeader = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
    toast.success("Log Out Successful");
  };
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
              <CustomLink className="nav-link mx-3" to="/">
                Home
              </CustomLink>
              <CustomLink className="nav-link mx-3" to="/blogs">
                Blogs
              </CustomLink>
              <CustomLink className="nav-link mx-3" to="/about">
                About
              </CustomLink>
              {/* <Link className="nav-link" to="/login">
                Log In
              </Link>
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link> */}
              <div>
                {user?.uid ? (
                  <Button
                    className="Brand text-light border border-light"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Button>
                ) : (
                  <CustomLink
                    to="/signup"
                    className="btn Brand text-light border border-light"
                  >
                    SIGN UP/IN
                  </CustomLink>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BrandHeader;
