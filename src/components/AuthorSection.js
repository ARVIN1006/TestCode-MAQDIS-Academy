import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {FaPenNib} from 'react-icons/fa';


const AuthorSection = () => {
  return (
    <section className="py-5" id="author" style={{ background: "#f8f9fa" }}>
    <Container>
      <h2 className="fw-bold text-center mb-4">Meet the Author</h2>
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <img src="/assets/images/person.jpg" alt="Author" className="img-fluid rounded shadow-lg" style={{ maxWidth: "80%"}} />
        </Col>
        <Col md={6}>
          <h3 className="fw-bold">John Doe</h3>
          <p className="text-muted">Bestselling Author & Educator</p>
          <p>
            John Doe is a renowned writer known for his deep insights into self-development and technology. 
            With over 15 years of experience, he has helped thousands of readers transform their lives.
          </p>
          <Button variant="primary"><FaPenNib className="me-2" /> Learn More</Button>
        </Col>
      </Row>
    </Container>
  </section>

  );
};

export default AuthorSection;
