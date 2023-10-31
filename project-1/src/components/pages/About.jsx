import React from "react";
import missionLogo from "./assets/AboutImages/mission.png";
import visionLogo from "./assets/AboutImages/vision.png";
import { ClientLogos } from "../ClientLogos";
import {Row, Col} from "react-bootstrap";

export const About = () => {
  let message1 =
    "Padro Design & Printing Services will provide you exactly the kind of printing results you have desired. We primarily focus on offering highest quality printing services at reasonable prices.";
  let message2 =
    "We combine technology with our broad experience to streamline the process so you will never have to settle for anything less. We deliver various print needs from preliminary design concepts to print production with cutting - edge technology. Delivering High Quality commercial printing services to our clients.";
  let message3 =
    "A combination of trustworthy people, advance digital technology and impeccable standards allows us to deliver outstanding production within budget and on time. Everytime.";
  let message4 = "We create the idea for you, we design it and we print it.";

  let missionmessage1 = "Providing high-quality print out";
  let missionmessage2 =
    "Create and cultivate long-term relationships with our valuable clients";
  let missionmessage3 =
    "Respond immediately to the changing needs of our clients";
  let missionmessage4 = "Achieve complete customer satisfaction";
  let missionmessage5 = "Improve our services continuously";
  let missionmessage6 =
    "Maintain professional relationship with our dedicated staff and logistic administration by encouraging to communicate with our clients to achieve the highest standards of performance.";

  let visionmessage1 =
    "Our vision is to be most premier service provider in the field of Printing Services. With the use of latest technologies, we aim to provide world-class services to our clients and forming strong relationships with our clients by maintaning cost, quality and deadlines.";
  let visionmessage2 =
    "We, at Padro Design & Printing Services understands the needs and the importance of good and high quality printing. We continuously innovating our process and out sourcing the demands of our valuable consumers. Investing knowledge in handling our latest machineries to produce high quality print out and products to meet our clients expectations and needs. ";

  return (
    <>
      <section className="about-heading text-center" id="about">
        <div className="container about-hero">
          <div className="row">
            <div className="col-md-12">
              <h2 className="about-title">
                ABOUT PADES PRINTING
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="first-section">
        <div className="container">
          <div className="about-des text-center">
            <h3 className="about-subtitle text-center">COMPANY PROFILE</h3>
            <div data-aos="fade-up" data-aos-duration="2000" className="about-description text-start">
              <p>{message1}</p>
              <p>{message2}</p>
              <p>{message3}</p>
              <p>
                <b>{message4}</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-vision">
        <div className="container">
          <Row>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="our-mission">
              <h2 className="mission-title text-center">OUR MISSION</h2>
              <div data-aos="fade-right" data-aos-duration="2000">
                <ul>
                  <li className="mission-message">{missionmessage1}</li>
                  <li className="mission-message">{missionmessage2}</li>
                  <li className="mission-message">{missionmessage3}</li>
                  <li className="mission-message">{missionmessage4}</li>
                  <li className="mission-message">{missionmessage5}</li>
                  <li className="mission-message">{missionmessage6}</li>
                </ul>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} data-aos="flip-left" data-aos-duration="1500" className="about-logo-container container" >
              <img  className="about-logo" src={missionLogo} alt=""></img>
            </Col>
          </Row>
          <Row lg={6} xs={12} className="row my-row">
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }}data-aos="flip-right" data-aos-duration="1500" className=" about-logo-container ">
                <img className="about-logo" src={visionLogo} alt=""></img>
            </Col>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }} className="our-vision">
              <div >
                <h2 className="vision-title text-center">OUR VISION</h2>
              </div>
              <div data-aos="fade-left" data-aos-duration="2000">
                <p className="vision-message">{visionmessage1}</p>
                <p className="vision-message">{visionmessage2}</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="second-section">
        <div className="container">
          <h3  className="about-subtitle text-center">OUR CLIENTS</h3>
          <div className="container">

            <div data-aos="fade-up" data-aos-duration="2000" className="first-logos">
              <ClientLogos clientName="DadasLechon"/>
              <ClientLogos clientName="ElordeBoxingGym" />
              <ClientLogos clientName="HealingGaling" />
              <ClientLogos clientName="ZWMPH" />
              <ClientLogos clientName="CommTrend" />
              <ClientLogos clientName="dTurbanadaTransport" />
              <ClientLogos clientName="FMGlobal" />
              <ClientLogos clientName="FordecioPowerDriveCorporation" />
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="first-logos">
              <ClientLogos clientName="GSTS" />
              <ClientLogos clientName="SinoCargoworks" />
              <ClientLogos clientName="PUPStaMaria" />
              <ClientLogos clientName="PNP" />
              <ClientLogos clientName="Bossh" />
              <ClientLogos clientName="VerenasCafe" />
              <ClientLogos clientName="SanJoseAcademy" />
              <ClientLogos clientName="ProSolutions" />
            </div>
            
            <div data-aos="fade-up" data-aos-duration="2000" className="first-logos">
              <ClientLogos clientName="Acay" />
              <ClientLogos clientName="allenmc" />
              <ClientLogos clientName="anSheng" />
              <ClientLogos clientName="bioQuick" />
              <ClientLogos clientName="Catarman" />
              <ClientLogos clientName="cocacola" />
              <ClientLogos clientName="DivinaPastora" />
              <ClientLogos clientName="easternVisayas" />
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="first-logos">
              <ClientLogos clientName="Florentino" />
              <ClientLogos clientName="LearningInstitute" />
              <ClientLogos clientName="northernSamar" />
              <ClientLogos clientName="RamMallari" />
              <ClientLogos clientName="SerapEngg" />
              <ClientLogos clientName="takeMeOut" />
              <ClientLogos clientName="yoloSolution" />
              <ClientLogos clientName="cantoCrestitaBar" />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="first-logos">
              <ClientLogos clientName="immaculateConception" />
              <ClientLogos clientName="kasanggayahanTrading" />
              <ClientLogos clientName="parkngo" />
              <ClientLogos clientName="pcTools" />
              <ClientLogos clientName="bioQuick" />
              <ClientLogos clientName="redCross" />
              <ClientLogos clientName="panjojoban" />
              <ClientLogos clientName="s2" />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="first-logos">
              <ClientLogos clientName="coolMotors" />
              <ClientLogos clientName="samar" />
              <ClientLogos clientName="tataBubbleTea" />
            </div>        
          </div>
        </div>
      </section>
    </>
  );
};
