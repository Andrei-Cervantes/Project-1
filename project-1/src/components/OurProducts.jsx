import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

export function OurProducts() {
  return (
    <div className="home-products-section">
      <Container>
        <Row>
          <Col xs={6}>
            <Card className="services-card our-services">
              <h3>Our Products</h3>
            </Card>
          </Col>
          <Col>
            <Card className="services-card more-services">
              <div className="view-more">
                <a className="view-more-text" href="/products">
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
          <Col xs={5}>
            <Card className="home-product-card kuyaJ"></Card>
          </Col>
          <Col>
            <Card className="home-product-card book"></Card>
          </Col>
          <Col>
            <Card className="home-product-card calendar"></Card>
          </Col>
          <Col>
            <Card className="home-product-card poster"></Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
