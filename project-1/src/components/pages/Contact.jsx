import React from "react";
import "./Contact.css";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Icons Imports
import { AiFillFacebook } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Contact = () => {
  return (
    <>
      <div className="hero-section">
        <div className="block"></div>
        <h1 className="text-center">GET IN TOUCH WITH US!</h1>
      </div>
      <Container fluid>
        <Row className="contact-container">
          <Col className="contact-maps">

          </Col>
          <Col className="contact-details">
            <h2>Our Contact Details:</h2>
            <Row className="footer-contact">
              <a className="footer-link" href="mailto:padesprinting@yahoo.com">
                <AiFillMail className="footer-icon" />
                padesprinting@yahoo.com
              </a>
            </Row>
            <Row className="footer-contact">
              <a className="footer-link" href="https://www.facebook.com/PADESprintingServices" target="blank">
                <AiFillFacebook className="footer-icon" />
                PADES Printing Services
              </a>
            </Row>
            <Row className="footer-contact">
              <a className="footer-link" href="tel:+(02)8.659-4131">
                <BsFillTelephoneFill className="footer-icon" />
                (02)8.659-4131
              </a>
            </Row>
          </Col>
          <Col className="contact-address">

          </Col>
        </Row>
      </Container>
    </>
  );
};
