import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar-light bg-light fixed-top shadow">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-dark">Book Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#overview" className="fw-bold text-dark">Overview</Nav.Link>
            <Nav.Link href="#pricing" className="fw-bold text-dark">Pricing</Nav.Link>
            <Nav.Link href="#testimonials" className="fw-bold text-dark">Testimonials</Nav.Link>
            <Nav.Link href="#author" className="fw-bold text-dark">Author</Nav.Link>
            <Nav.Link href="#contact" className="fw-bold text-dark">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
