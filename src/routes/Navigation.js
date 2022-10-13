import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#">Movie App</Navbar.Brand>
        <Nav className="me-auto" style={{ maxHeight: "100px" }} navbarScroll>
          <Nav.Link as={Link} to="/" href="#home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/movieApp" href="#movieApp">
            Movie
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
