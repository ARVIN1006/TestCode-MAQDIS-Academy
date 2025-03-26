import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaMoneyBillWave, FaCheck } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <section className="bg-light py-5" id="pricing">
      <Container>
        <h2 className="fw-bold text-center mb-4">Pricing Plans</h2>
        <Row className="g-4">
          {[
            { plan: "Basic", price: "$9.99", benefits: ["PDF Format", "Limited Access", "Email Support"] },
            { plan: "Standard", price: "$19.99", benefits: ["PDF & ePUB Format", "Full Access", "Priority Support"] },
            { plan: "Premium", price: "$29.99", benefits: ["All Formats", "Exclusive Content", "24/7 Support"] }
          ].map((item, index) => (
            <Col md={4} key={index}>
              <Card className="p-4 text-center shadow-lg border-0 d-flex flex-column align-items-center" style={{ height: '100%' }}>
                {/* Wrapper untuk ikon supaya posisinya benar-benar di tengah */}
                <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: '80px' }}>
                  <FaMoneyBillWave size={50} className="text-primary" />
                </div>
                <h3 className="fw-bold">{item.plan}</h3>
                <h4 className="text-success">{item.price}</h4>
                <ul className="list-unstyled mt-3">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-muted">
                      <FaCheck className="text-success me-2" /> {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" className="mt-3">Choose Plan</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;
