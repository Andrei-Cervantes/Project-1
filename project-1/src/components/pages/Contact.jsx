import React, { useState } from "react";
import "./Contact.css";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Icons Imports
import { AiFillFacebook } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

// Image Imports
import main from "./assets/ContactImages/main.jpg";
import catarman from "./assets/ContactImages/catarman.jpg";
import borongan from "./assets/ContactImages/borongan.jpg";
import calbayog from "./assets/ContactImages/calbayog.jpg";
import tacloban from "./assets/ContactImages/tacloban.jpg";

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
            <h3 className="contact-title">Our contact details:</h3>
            <div className="contact-info">
              <div className="contact">
                <a
                  className="contact-link"
                  href="https://www.facebook.com/PADESprintingServices"
                  target="blank"
                >
                  <AiFillFacebook className="contact-icon" />
                  PADES Printing Services
                </a>
              </div>
              <div className="contact">
                <a className="contact-link" href="tel:+(02)8.659-4131">
                  <BsFillTelephoneFill className="contact-icon" />
                  (02)8.659-4131
                </a>
              </div>
              <div className="contact">
                <a
                  className="contact-link"
                  href="mailto:enquiries@padesprinting.com.ph"
                >
                  <AiFillMail className="contact-icon" />
                  enquiries@padesprinting.com.ph
                </a>
              </div>
              <div className="contact">
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
          <div className="contact-locations">
            <div className="locations-container">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className="locations-carousel"
                interval={null}
                controls={false}
                indicators={false}
              >
                <Carousel.Item>
                  <div className="text-center">
                    <img src={main} classname="location-images"></img>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={catarman} classname="location-images"></img>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={borongan} classname="location-images"></img>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={calbayog} classname="location-images"></img>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img src={tacloban} classname="location-images"></img>
                  </div>
                </Carousel.Item>
              </Carousel>
              <br />
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
                indicators={false}
                fade={true}
              >
                <Carousel.Item>
                  <div className="text-center">
                    <h4>
                      Lot 19-B, Block 215, Dollar St. Phase 8, North Fairvew,
                      Quezon City
                    </h4>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <h4>Purok 1, Brgy. Dalakit, Catarman N. Samar</h4>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <h4>
                      Purok Central, Brgy. Alang - Alang, Borongan City, Eastern
                      Samar
                    </h4>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <h4>
                      P-4 Greenlande, Brgy. Rawis, Calbayog City, Western Samar
                    </h4>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <h4>Brgy. 91, Abucay, Tacloban City, Leyte</h4>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
