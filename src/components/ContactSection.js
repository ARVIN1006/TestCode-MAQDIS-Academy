import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import {FaUser, FaEnvelope, FaCommentDots} from 'react-icons/fa';


const ContactSection = () => {
  return (
    <section className="py-5" id="contact" style={{ background: "#f8f9fa" }}>
        <Container>
          <h2 className="fw-bold text-center mb-4">Get in Touch</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="p-4 shadow-lg border-0">
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label><FaUser className="me-2" /> Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label><FaEnvelope className="me-2" /> Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label><FaCommentDots className="me-2" /> Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your message here..." />
                  </Form.Group>
                  <Button variant="primary" className="w-100">Send Message</Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default ContactSection;
