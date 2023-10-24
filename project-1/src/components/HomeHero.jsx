import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import "../App.css";

import customize from "../assets/ServiceIcons/customize.png";
import desktop from "../assets/ServiceIcons/desktop.png";
import graphicdesign from "../assets/ServiceIcons/graphicdesign.png";
import largeformat from "../assets/ServiceIcons/largeformat.png";
import layouting from "../assets/ServiceIcons/layouting.png";
import offset from "../assets/ServiceIcons/offset.png";

export function HomeHero() {
  return (
    <div className="homehero">
      <Container className="home-services">
        <Row>
          <Col xs={7} lg={6} id="our-services-col">
            <Card className="services-card our-services">
              <h3>Our Services</h3>
            </Card>
          </Col>
          <Col xs={5} lg={6} >
            <Card className="services-card more-services">
              <div className="view-more">
                <a className="view-more-text" href="/services">
                  View More{" "}
                  <span className="arrow-animation">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} >
            <Card className="services-card">
              <div className="icon-container">
                <img src={graphicdesign} className="service-icon" alt="" />
              </div>
              <div className="service-text">Graphic Design</div>
              <div className="bg-icon-container">
                <img src={graphicdesign} className="bg-icon" alt="" />
              </div>
            </Card>
          </Col>
          <Col xs={12} lg={6} >
            <Card className="services-card">
              <div className="icon-container">
                <img src={layouting} className="service-icon" alt="" />
              </div>
              <div className="service-text">Lay-Outing</div>
              <div className="bg-icon-container">
                <img src={layouting} className="bg-icon" alt="" />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} >
            <Card className="services-card">
              <div className="icon-container">
                <img src={customize} className="service-icon" alt="" />
              </div>
              <div className="service-text">Customize Prints</div>
              <div className="bg-icon-container">
                <img src={customize} className="bg-icon" alt="" />
              </div>
            </Card>
          </Col>
          <Col xs={12} lg={6} >
            <Card className="services-card">
              <div className="icon-container">
                <img src={largeformat} className="service-icon" alt="" />
              </div>
              <div className="service-text">Large Format Printing</div>
              <div className="bg-icon-container">
                <img src={largeformat} className="bg-icon" alt="" />
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} >
            <Card className="services-card">
              <div className="icon-container">
                <img src={desktop} className="service-icon" alt="" />
              </div>
              <div className="service-text">Desktop Printing</div>
              <div className="bg-icon-container">
                <img src={desktop} className="bg-icon" alt="" />
              </div>
            </Card>
          </Col>
          <Col xs={12} lg={6} >
            <Card className="services-card">
              <div className="icon-container">
                <img src={offset} className="service-icon" alt="" />
              </div>
              <div className="service-text">Offset Printing</div>
              <div className="bg-icon-container">
                <img src={offset} className="bg-icon" alt="" />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
