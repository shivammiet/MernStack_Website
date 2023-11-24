import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import logo from "../image/logo1.jpeg"; // Adjust the path accordingly

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="logo" />
        Navbar
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/About">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/Login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Signup
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
