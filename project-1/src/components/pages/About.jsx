import React from "react";
import Carousel from "react-bootstrap/Carousel";
import missionLogo from "./assets/AboutImages/mission.png";
import visionLogo from "./assets/AboutImages/vision.png";
import doc1 from "./assets/AboutImages/doc1.png";
import doc2 from "./assets/AboutImages/doc2.png";
import doc3 from "./assets/AboutImages/doc3.png";
import doc4 from "./assets/AboutImages/doc4.png";
import doc5 from "./assets/AboutImages/doc5.png";
import doc6 from "./assets/AboutImages/doc6.png";
import doc7 from "./assets/AboutImages/doc7.png";

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
      <section className="about-heading" id="about">
        <div className="container about-hero">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="about-title">
                ABOUT PADRO DESIGN & PRINTING SERVICES
              </h2>
              <div className="about-des text-center">
                <h3 className="about-subtitle text-start">COMPANY PROFILE</h3>
                <div className="about-description text-start">
                  <p>{message1}</p>
                  <p>{message2}</p>
                  <p>{message3}</p>
                  <p>
                    <b>{message4}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-vision">
        <div className="container">
          <div className="row mv-row">
            <div className="our-mission col-md-6">
              <h2 className="mission-title text-center">OUR MISSION</h2>
              <ul>
                <li className="mission-message">{missionmessage1}</li>
                <li className="mission-message">{missionmessage2}</li>
                <li className="mission-message">{missionmessage3}</li>
                <li className="mission-message">{missionmessage4}</li>
                <li className="mission-message">{missionmessage5}</li>
                <li className="mission-message">{missionmessage6}</li>
              </ul>
            </div>
            <div className="container col-md-6 our-mission-img">
              <img className="about-logo" src={missionLogo} alt=""></img>
            </div>
          </div>
          <div className="row mv-row">
            <div className="col-md-6">
              <img className="about-logo" src={visionLogo} alt=""></img>
            </div>
            <div className=" our-vision col-md-6">
              <h2 className="vision-title text-center">OUR VISION</h2>
              <p className="vision-message">{visionmessage1}</p>
              <p className="vision-message">{visionmessage2}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="documents-img">
        <div className="container">
          <h2 className="documents-title text-center">LEGAL DOCUMENTATION</h2>
        </div>

        <div className="container">
          <Carousel>
            <Carousel.Item>
              <div className="text-center">
                <img className="docu-property" alt="" src={doc1}></img>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="docu-property" alt="" src={doc2}></img>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="docu-property" alt="" src={doc3}></img>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="docu-property" alt="" src={doc4}></img>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="docu-property" alt="" src={doc5}></img>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="docu-property" alt="" src={doc6}></img>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="docu-property" alt="" src={doc7}></img>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
};
