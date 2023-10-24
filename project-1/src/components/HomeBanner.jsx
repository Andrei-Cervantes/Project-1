import Container from "react-bootstrap/esm/Container"

export function HomeBanner() {
    return (
        <div className="homehero-section">
        <Container className="homehero-slogan-container">
          <h1 data-aos="fade-left" data-aos-duration="2000" className="homehero-slogan1">YOUR ONE STOP,</h1>
          <h1 data-aos="fade-right" data-aos-duration="2000" className="homehero-slogan2">PRINT SHOP</h1>
        </Container>
      </div>
    )
}