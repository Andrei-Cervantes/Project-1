import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import p10 from "../assets/ProductImages/p10.png";
import p13 from "../assets/ProductImages/p13.png";
import p12 from "../assets/ProductImages/p12.png";
import p14 from "../assets/ProductImages/p14.png";

export function OurProducts() {
  return (
    <div className="home-projects-section">
      <Container>
        <Row>
          <h3 className="text-center">Our Products</h3>
        </Row>
        <Row className="project-card-row">
          <Col>
            <Card className="project-card">
              <Card.Img src={p10} />
            </Card>
          </Col>
          <Col>
            <Card className="project-card">
              <Card.Img src={p13} />
            </Card>
          </Col>
          <Col>
            <Card className="project-card">
              <Card.Img src={p12} />
            </Card>
          </Col>
          <Col>
            <Card className="project-card">
              <Card.Img src={p14} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
