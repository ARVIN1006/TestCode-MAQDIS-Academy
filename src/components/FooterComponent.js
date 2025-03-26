import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <Container>
        <Row>
          {/* Kolom Informasi */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <p><FaMapMarkerAlt /> Jl. Pahlawan No.64, Neglasari, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40123</p>
            <p><FaPhone /> +62 812-3456-7890</p>
            <p><FaEnvelope /> info@Dummy.com</p>
          </Col>

          {/* Kolom Google Maps */}
          <Col md={4}>
            <h5>Find Us</h5>
            <div className="map-responsive">
              <iframe
                title="Google Maps"
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2540625071163!2d107.61745061477435!3d-7.003101094949998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9c5d1e1f0b5%3A0x104c0bfb7c7c5f0!2sBandung!5e0!3m2!1sen!2sid!4v1646964989125!5m2!1sen!2sid"
                allowFullScreen
              ></iframe>
            </div>
          </Col>

          {/* Kolom Sosial Media */}
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="text-white mx-2"><FaFacebook size={24} /></a>
              <a href="#" className="text-white mx-2"><FaTwitter size={24} /></a>
              <a href="#" className="text-white mx-2"><FaInstagram size={24} /></a>
              <a href="#" className="text-white mx-2"><FaLinkedin size={24} /></a>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center m-0">&copy; 2025 Yayasan Maqdis. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default FooterComponent;
