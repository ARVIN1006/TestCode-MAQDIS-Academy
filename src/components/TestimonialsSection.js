import React from 'react';
import { Container, Carousel } from 'react-bootstrap';


const TestimonialSection = () => {
  return (
    <section className="bg-light py-5" id="testimonials">
        <Container>
          <h2 className="fw-bold text-center mb-4">What Our Readers Say</h2>
          <Carousel className="shadow-lg p-4 rounded">
            <Carousel.Item>
              <h4 className="text-center">“A must-read for anyone looking to level up their knowledge!”</h4>
              <p className="text-center text-muted">- Jane Doe, Author</p>
            </Carousel.Item>
            <Carousel.Item>
              <h4 className="text-center">“The best book I’ve read this year, hands down.”</h4>
              <p className="text-center text-muted">- John Smith, Developer</p>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

  );
};

export default TestimonialSection;
