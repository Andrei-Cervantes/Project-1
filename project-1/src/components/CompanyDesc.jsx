import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import "../App.css";

export function CompanyDesc() {
  return (
    <div className="homehero">
      <Container className="home-company-desc-container">
        <Row>
          <Col>
            <Card className="home-company-desc-card">
              <p className="home-company-desc">
                PADES Printing will provide you exactly the kind of printing
                results you have desired. We primarily focus on offering highest
                quality printing services at reasonable prices. We combine
                technology with our broad experience to streamline the process
                so you will never have to settle for anything less.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
