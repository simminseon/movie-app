import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

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
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navigation;
