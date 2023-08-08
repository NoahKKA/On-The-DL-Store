import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Person, Mailbox, HouseDoor, Cart } from "react-bootstrap-icons";
import "./Navbar.css";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="custom-navbar navbar-expand-lg"
    >
      <Navbar.Brand href="/">
        <img
          src={process.env.PUBLIC_URL + "/logo.jpeg"}
          alt="Logo"
          className="navbar-logo rounded-circle"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ marginRight: "10px" }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/picture-web"
            className="text-black"
            style={{ marginLeft: "auto", marginRight: "10px" }}
          >
            <HouseDoor /> Home
          </Nav.Link>
          <NavDropdown
            title={
              <div style={{ color: "black" }} 
              className={`custom-dropdown-mobile ${dropdownOpen ? "open" : ""}`}>
                <Cart /> Shop
              </div>
            }
            id="basic-nav-dropdown"
            className={`text-black custom-dropdown`}
            renderMenuOnMount
            style={{ marginLeft: "auto", marginRight: "10px" }}
            show={dropdownOpen}
            onToggle={toggleDropdown}
          >
            <NavDropdown.Item
              as={Link}
              to="/picture-web"
              className="text-black"
            >
              All Items
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/the-drip" className="text-black">
              The Drip
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/the-drip/women"
              className="text-black"
            >
              Women
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/the-drip/men"
              className="text-black"
            >
              Men
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/the-drip/kicks"
              className="text-black"
            >
              Kicks
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/household" className="text-black">
              Household
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/miscellaneous"
              className="text-black"
            >
              Miscellaneous
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            as={Link}
            to="/about"
            className="text-black"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Profile"
            style={{ marginLeft: "auto", marginRight: "10px" }}
          >
            <Person /> Profile
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className="text-black"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Get in Touch"
            style={{ marginLeft: "auto", marginRight: "10px" }}
          >
            <Mailbox /> Get In Touch
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
