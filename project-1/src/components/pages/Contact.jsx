import React, { useState } from "react";
import "./Contact.css";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

// Icons Imports
import { AiFillFacebook } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import phone from "./assets/ContactImages/facebook.png";
import mail from "./assets/ContactImages/mail.png";
import facebook from "./assets/ContactImages/facebook.png";

// Image Imports
import mainfront from "./assets/ContactImages/main-front.jpg";
import maininside from "./assets/ContactImages/main-inside.jpg";
import mainmap from "./assets/ContactImages/main-map.jpg";
import catarmanfront from "./assets/ContactImages/catarman-front.jpg";
import catarmaninside from "./assets/ContactImages/catarman-inside.jpg";
// import catarmanmap from "./assets/ContactImages/catarman-map.jpg";
import boronganfront from "./assets/ContactImages/borongan-front.jpg";
import boronganinside from "./assets/ContactImages/borongan-inside.jpg";
import boronganmap from "./assets/ContactImages/borongan-map.jpg";
import calbayogfront from "./assets/ContactImages/calbayog-front.jpg";
import calbayoginside from "./assets/ContactImages/calbayog-inside.jpg";
import calbayogmap from "./assets/ContactImages/calbayog-map.jpg";
import taclobanfront from "./assets/ContactImages/tacloban-front.jpg";
import taclobaninside from "./assets/ContactImages/tacloban-inside.jpg";
// import taclobanmap from "./assets/ContactImages/tacloban-map.jpg";


export const Contact = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <section className="contact-banner">
        <Container className="contact-content">
          <Row>
            <h2>GET IN TOUCH WITH US!</h2>
          </Row>
        </Container>
      </section>
      <section>
        <div className="contact-container">
          <div className="contact-details">
            <h3 className="contact-title">
              OUR CONTACT DETAILS:
            </h3>
            <div className="contact-info">
              <div
                data-aos="zoom-in-right"
                data-aos-duration="2000"
                className="contact"
              >
                <a
                  className="contact-link"
                  href="https://www.facebook.com/PADESprintingServices"
                  target="blank"
                >
                  <AiFillFacebook className="contact-icon" />
                  PADES Printing Services
                </a>
              </div>
              <div
                data-aos="zoom-in-right"
                data-aos-duration="2000"
                className="contact"
              >
                <a className="contact-link" href="tel:+(02)8.659-4131">
                  <BsFillTelephoneFill className="contact-icon" />
                  (02)8.659-4131
                </a>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-duration="2000"
                className="contact"
              >
                <a
                  className="contact-link"
                  href="mailto:enquiries@padesprinting.com.ph"
                >
                  <AiFillMail className="contact-icon" />
                  enquiries@padesprinting.com.ph
                </a>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-duration="2000"
                className="contact"
              >
                <a
                  className="contact-link"
                  href="mailto:padesprinting@yahoo.com"
                >
                  <AiFillMail className="contact-icon" />
                  padesprinting@yahoo.com
                </a>
              </div>
            </div>
          </div>

          {/* Location Carousel */}

          <div className="contact-locations">
            <h3 className="text-center">COME VISIT US:</h3>
            <div className="locations-container">
              <h4>Lot 19-B, Block 215, Dollar St. Phase 8, North Fairvew, Quezon City</h4>
              <Carousel
                data-aos="fade-up"
                data-aos-duration="2000"
                activeIndex={index}
                onSelect={handleSelect}
                className="locations-carousel"
                interval={5000}
              >
                <Carousel.Item>
                  <div className="text-center">
                    <img src={mainmap} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Map</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={catarmanfront} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Front</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={boronganmap} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Inside</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="locations-container" id="borongan">
              <h4>Purok Central, Brgy. Alang - Alang, Borongan City, Eastern Samar</h4>
              <Carousel
                data-aos="fade-up"
                data-aos-duration="2000"
                activeIndex={index}
                onSelect={handleSelect}
                className="locations-carousel"
                interval={5000}
              >
                <Carousel.Item>
                  <div className="text-center">
                    <img src={mainmap} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Map</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={catarmanfront} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Front</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={boronganmap} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Inside</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="locations-container" id="calbayog">
              <h4>P-4 Greenlande, Brgy. Rawis, Calbayog City, Western Samar</h4>
              <Carousel
                data-aos="fade-up"
                data-aos-duration="2000"
                activeIndex={index}
                onSelect={handleSelect}
                className="locations-carousel"
                interval={5000}
              >
                <Carousel.Item>
                  <div className="text-center">
                    <img src={mainmap} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Map</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={catarmanfront} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Front</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={boronganmap} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Inside</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="locations-container" id="catarman">
              <h4>Purok 1, Brgy. Dalakit, Catarman N. Samar</h4>
              <Carousel
                data-aos="fade-up"
                data-aos-duration="2000"
                activeIndex={index}
                onSelect={handleSelect}
                className="locations-carousel"
                interval={5000}
              >
                <Carousel.Item>
                  <div className="text-center">
                    <img src={mainmap} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Map</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={catarmanfront} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Front</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={boronganmap} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Inside</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="locations-container" id="tacloban">
              <h4>Brgy. 91, Abucay, Tacloban City, Leyte</h4>
              <Carousel
                data-aos="fade-up"
                data-aos-duration="2000"
                activeIndex={index}
                onSelect={handleSelect}
                className="locations-carousel"
                interval={5000}
              >
                <Carousel.Item>
                  <div className="text-center">
                    <img src={mainmap} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Map</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={catarmanfront} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Front</h5>
                  </Carousel.Caption>Map
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={boronganmap} classname="location-images"></img>
                  </div>
                  <Carousel.Caption>
                    <h5>Inside</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
