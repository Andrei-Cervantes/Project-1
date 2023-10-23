import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"

import Row from "react-bootstrap/esm/Row";

export function ModesOfPayment() {
  return (
    <Container className="mop-section">
      <Row className="mop-section-h3-container">
        <h3>Mode of Payments</h3>
      </Row>
      <Row>
        <Col lg={4}>
          <Card className="mop-card">
            Cash
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="mop-card">
            Check
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="mop-card">
            GCash/Paymaya
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
