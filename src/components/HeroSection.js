import React from 'react';
import { Container, Carousel, Button  } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section id="hero-section" className=" py-5 text-center text-white d-flex align-items-center" style={{ background: "linear-gradient(180deg, #6610f2, #007bff)", minHeight: "100vh" }}>
    <Container>
      <Carousel className="shadow-lg rounded mb-4 animate__animated animate__fadeIn">
        <Carousel.Item>
          <img className="d-block w-100 rounded" src="/assets/images/slide 1.jpg" alt="Slide 1" />
          <Carousel.Caption>
            <h3 className="fw-bold">Discover Amazing Books</h3>
            <p>Expand your knowledge with our best-selling books.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 rounded" src="/assets/images/slidee 2.jpg" alt="Slide 2" />
          <Carousel.Caption>
            <h3 className="fw-bold">Enhance Your Learning</h3>
            <p>Explore expert-written books to elevate your skills.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button variant="warning" size="lg" className="mt-3 animate__animated animate__pulse animate__infinite">Get Your Copy</Button>
      <p className="mt-2">*Available in PDF, ePUB, Mobi & Kindle.</p>
    </Container>
  </section>

  );
};

export default HeroSection;
