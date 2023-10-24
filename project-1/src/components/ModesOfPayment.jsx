import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";

import cash from "./pages/assets/MOPIcons/cash.png";
import cheque from "./pages/assets/MOPIcons/cheque.png";
import ewallet from "./pages/assets/MOPIcons/ewallet.png";

export function ModesOfPayment() {
  return (
    <Container className="mop-section">
      <Row className="mop-section-h3-container">
        <h3>Modes of Payment</h3>
      </Row>
      <Row className="mop-cards-container">
        <Col id="mop-card-cash" lg={3} xs={6}>
          <Card className="mop-card">
            <img className="mop-icon" src={cash} alt="cash icon" />
            <p className="mop-name">Cash</p>
          </Card>
        </Col>
        <Col id="mop-card-check" lg={3} xs={6}>
          <Card className="mop-card">
            <img className="mop-icon" src={cheque} alt="cheque icon" />
            <p className="mop-name">Check</p>
          </Card>
        </Col>
        <Col lg={6} xs={12}>
          <Card className="mop-card">
            <img
              id="ewallet-icon"
              className="mop-icon"
              src={ewallet}
              alt="ewallet icon"
            />
            <p className="mop-name">GCash/PayMaya</p>
            <div className="ewallet-flex">
              <p id="ewallet-number">0908 310 3428</p>
              <button
                id="ewallet-copy-button"
                onClick={() => navigator.clipboard.writeText("0908 310 3428")}
              >
                Copy Number to Clipboard
              </button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
