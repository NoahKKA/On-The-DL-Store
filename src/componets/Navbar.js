import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="custom-navbar navbar-expand-lg"
    >
      <Navbar.Brand href="/picture-web">
        <img
          src={process.env.PUBLIC_URL + "/logo.jpeg"}
          alt="Logo"
          className="navbar-logo rounded-circle"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/picture-web"
            className="text-black px-4"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Home"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            className="text-black px-4"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Profile"
          >
            Profile
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className="text-black px-4"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Get in Touch"
          >
             Get In Touch
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
