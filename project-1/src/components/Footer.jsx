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
      <Container>
        <Row>
          <Col className="footer-logo-container">
            <img id="footer-logo" src={logo} alt="" />  
          </Col>
          <Col>
            <h3>Contact Us</h3>
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
          <Col xs={6} className="footer-address">
            <h6>Office Address</h6>
            <p>
              Lot 19-B, Block 215, Dollar St. Phase 8, North Fairview, Quezon
              City
            </p>
            <h6>Production Address</h6>
            <p>
              0215 Miraflor Extension, Miraflor Subdivision, Borol 1st Balagtas,
              Bulacan
            </p>
            <h6>Branches</h6>
            <ul>
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
            Copyright &copy; 2023 Padro Design & Printing Services. All Rights
            Reserved
          </Col>
          <Col>
            <Nav className="justify-content-end footer-nav-links-container" activeKey="/home">
              <Nav.Item>
                <NavLink to="/" className="footer-nav-links">
                Home
              </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/about" className="footer-nav-links">
                About
              </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/contact" className="footer-nav-links">
                Contact
              </NavLink>
              </Nav.Item>
              <Nav.Item>
                <a href="" className="footer-nav-links">Terms and Conditions</a>
              </Nav.Item>
              <Nav.Item>
                <a href="" className="footer-nav-links">Privacy</a>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
