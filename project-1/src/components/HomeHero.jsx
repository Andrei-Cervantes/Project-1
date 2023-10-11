import Image from 'react-bootstrap/Image';
import dddepth113 from '../assets/dddepth113.png';
import Container from "react-bootstrap/Container";

export function HomeHero() {
  return (
    <div className="homehero">
      <Container>
        <Image src={dddepth113} fluid />
      </Container>
    </div>
  );
}
