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
              <div data-aos="fade-right" data-aos-duration="2000">
                <p className="home-company-desc1">
                  We know how important designs are when it comes to your branding,
                  print and layout.
                </p>
              </div>

              <div data-aos="fade-down" data-aos-duration="2000" className="home-company-desc2-container">
                <p className="home-company-desc2">
                  {" "}
                  Our printing team are always on hand to get the job done.
                </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="3000" className="home-company-desc3-container">
                <p className="home-company-desc3">
                  {" "}
                  From the design for print to digital design, our team will
                  work hard to your deadlines, not ours.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
