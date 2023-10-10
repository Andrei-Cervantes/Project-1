import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

import DadasLechon from "../assets/ClientLogos/DadasLechon.png";
import ElordeBoxingGym from "../assets/ClientLogos/ElordeBoxingGym.png";
import HealingGaling from "../assets/ClientLogos/HealingGaling.png";
import ZWMPH from "../assets/ClientLogos/ZWMPH.png";
import CommTrend from "../assets/ClientLogos/CommTrend.png";
import dTurbanadaTransport from "../assets/ClientLogos/dTurbanadaTransport.png";
import FMGlobal from "../assets/ClientLogos/FMGlobal.png";
import FordecioPowerDriveCorporation from "../assets/ClientLogos/FordecioPowerDriveCorporation.png";

import GSTS from "../assets/ClientLogos/GSTS.png";
import SinoCargoworks from "../assets/ClientLogos/SinoCargoworks.png";
import PUPStaMaria from "../assets/ClientLogos/PUPStaMaria.png";
import PNP from "../assets/ClientLogos/PNP.png";
import Bossh from "../assets/ClientLogos/Bossh.png";
import VerenasCafe from "../assets/ClientLogos/VerenasCafe.png";
import SanJoseAcademy from "../assets/ClientLogos/SanJoseAcademy.png";
import ProSolutions from "../assets/ClientLogos/ProSolutions.png";

export function FeaturedClients() {
  return (
    <div className="featured-clients">
      <Container>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="container rounded">
              <h3 className="text-center">Our Clients</h3>
              <div className="slider">
                <div className="logos">
                      <img
                        className="clients-logo"
                        src={DadasLechon}
                        alt="DadasLechon"
                      />
                      <img
                        className="clients-logo"
                        src={ElordeBoxingGym}
                        alt="ElordeBoxingGym"
                      />
                      <img
                        className="clients-logo"
                        src={HealingGaling}
                        alt="HealingGaling"
                      />
                      <img className="clients-logo" src={ZWMPH} alt="ZWMPH" />
                      <img
                        className="clients-logo"
                        src={CommTrend}
                        alt="CommTrend"
                      />
                      <img
                        className="clients-logo"
                        src={dTurbanadaTransport}
                        alt="dTurbanadaTransport"
                      />
                      <img
                        className="clients-logo"
                        src={FMGlobal}
                        alt="FMGlobal"
                      />
                      <img
                        className="clients-logo"
                        src={FordecioPowerDriveCorporation}
                        alt="FordecioPowerDriveCorporation"
                      />
                </div>
                <div className="logos"><img
                        className="clients-logo"
                        src={DadasLechon}
                        alt="DadasLechon"
                      />
                      <img
                        className="clients-logo"
                        src={ElordeBoxingGym}
                        alt="ElordeBoxingGym"
                      />
                      <img
                        className="clients-logo"
                        src={HealingGaling}
                        alt="HealingGaling"
                      />
                      <img className="clients-logo" src={ZWMPH} alt="ZWMPH" />
                      <img
                        className="clients-logo"
                        src={CommTrend}
                        alt="CommTrend"
                      />
                      <img
                        className="clients-logo"
                        src={dTurbanadaTransport}
                        alt="dTurbanadaTransport"
                      />
                      <img
                        className="clients-logo"
                        src={FMGlobal}
                        alt="FMGlobal"
                      />
                      <img
                        className="clients-logo"
                        src={FordecioPowerDriveCorporation}
                        alt="FordecioPowerDriveCorporation"
                      />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
