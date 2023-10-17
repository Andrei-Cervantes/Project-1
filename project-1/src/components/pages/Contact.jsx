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
      <section className="contact-banner">
        <Container className="contact-content">
          <Row>
            <h2>GET IN TOUCH WITH US!</h2>
          </Row>
        </Container>
      </section>
      <section>
        <div className="contact-container">
          <div className="contact-details">
            <h3 className="contact-title">Our contact details:</h3>
            <div className="contact-info">
              <div className="contact">
                <a
                  className="contact-link"
                  href="https://www.facebook.com/PADESprintingServices"
                  target="blank"
                >
                  <AiFillFacebook className="contact-icon" />
                  PADES Printing Services
                </a>
              </div>
              <div className="contact">
                <a className="contact-link" href="tel:+(02)8.659-4131">
                  <BsFillTelephoneFill className="contact-icon" />
                  (02)8.659-4131
                </a>
              </div>
              <div className="contact">
                <a
                  className="contact-link"
                  href="mailto:padesprinting@yahoo.com"
                >
                  <AiFillMail className="contact-icon" />
                  padesprinting@yahoo.com
                </a>
              </div>
            </div>
          </div>
          <div className="contact-locations"></div>
        </div>
      </section>
    </>
  );
};
