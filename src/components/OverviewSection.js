import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaBook, FaStar, FaAward, FaUsers } from 'react-icons/fa';

const OverviewSection = () => {
  return (
    <section className="container my-5 text-center" id="overview">
      <h2 className="fw-bold text-primary">Why Choose Our Books?</h2>
      <Row className="g-4 mt-4">
        {[
          { icon: <FaBook size={50} className="text-primary" />, text: "650+ Pages of Knowledge" },
          { icon: <FaStar size={50} className="text-warning" />, text: "Highly Rated by Readers" },
          { icon: <FaUsers size={50} className="text-success" />, text: "10,000+ Happy Readers" },
          { icon: <FaAward size={50} className="text-danger" />, text: "Award-Winning Content" }
        ].map((item, index) => (
          <Col md={3} key={index}>
            <Card className="p-4 shadow-lg border-0 text-center bg-light d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '80px' }}>
                {item.icon}
              </div>
              <h4 className="fw-bold mt-3">{item.text}</h4>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default OverviewSection;
