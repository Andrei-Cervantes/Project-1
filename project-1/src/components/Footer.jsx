import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer">
      <Container className="footer-top">
        <Row className="footer-mainrow">
          <Col className="footer-logo-container">
            <img id="footer-logo" src={logo} alt="" />
          </Col>
          <Col className="contact-us-container">
            <h3>Contact Us</h3>
            <Row className="footer-contact">
              <a className="footer-link" href="mailto:padesprinting@yahoo.com">
                <AiFillMail className="footer-icon" />
                padesprinting@yahoo.com
              </a>
            </Row>
            <Row className="footer-contact">
              <a
                className="footer-link"
                href="mailto:enquiries@padesprinting.com.ph"
              >
                <AiFillMail className="footer-icon" />
                enquiries@padesprinting.com.ph
              </a>
            </Row>
            <Row className="footer-contact">
              <a
                className="footer-link"
                href="https://www.facebook.com/PADESprintingServices"
                target="blank"
              >
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
          <Col xs={6} className="footer-address">
            <h6>Office Address</h6>
            <p>
              19B, 215 Dollar St. P8, North Fairview, Quezon
              City, Philippines
            </p>
            <h6 className="hide-in-mobile">Production Address</h6>
            <p className="hide-in-mobile">
              0215 Miraflor Extension, Miraflor Subdivision, Borol 1st Balagtas,
              Bulacan
            </p>
            <h6 className="hide-in-mobile">Branches</h6>
            <ul className="hide-in-mobile">
              <li className="branches-list">
                Purok 1, Brgy. Dalakit, Catarman N. Samar
              </li>
              <li className="branches-list">
                Purok Central, Brgy. Alang - Alang, Borongan City, Eastern Samar
              </li>
              <li className="branches-list">
                P-4 Greenland, Brgy. Rawis, Calbayog City, Western Samar
              </li>
              <li className="branches-list">
                Brgy. 91, Abucay, Tacloban City, Leyte
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container className="footer-copyright">
        <Row>
          <Col className="copyright">
            Copyright &copy; 2023 PADES Printing. All Rights Reserved
          </Col>
          <Col className="footer-nav-links-parent">
            <Nav
              className="justify-content-end footer-nav-links-container"
              activeKey="/home"
            >
              <Nav.Item>
                <NavLink to="/" className="footer-nav-links nav-logo">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/about" className="footer-nav-links nav-logo">
                  About
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/contact" className="footer-nav-links nav-logo">
                  Contact
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="mailto:jynoe.sabido22@gmail.com, andrei29.cervantes@gmail.com" className="footer-nav-links nav-logo">
                  Hire Developers
                </NavLink>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="vector-license-container">
            <span className="vector-license">
              <a href="https://storyset.com/work" target="_blank" rel="noreferrer">
                Work illustrations by Storyset
              </a>
            </span>
            <span className="vector-license">
            <a href="https://www.freepik.com/free-photo/abstract-paint-splashing-vibrant-colors-liquid-motion-generated-by-ai_41358549.htm#query=cmyk&position=15&from_view=search&track=sph" target="_blank" rel="noreferrer">Image by vecstock</a> on Freepik
            </span>
            <span className="vector-license">
            Icons by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
            </span>
          </Col>
          <Col xs={6}>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
