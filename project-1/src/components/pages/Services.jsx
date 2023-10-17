import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import gdvector from "./assets/gdvector.svg";
import lovector from "./assets/lovector.svg";
import cpvector from "./assets/cpvector.svg";
import lfpvector from "./assets/lfpvector.svg";
import dpvector from "./assets/dpvector.svg";
import offsetvector from "./assets/offsetvector.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "1rem",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "1rem",
      }}
      onClick={onClick}
    />
  );
}

export const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="services-banner">
        <Container className="services-content">
          <Row>
            <h2>SERVICES</h2>
          </Row>
        </Container>
      </section>
      <Container className="services-page">
        <Row className="services-subtitle">
          <p>
            At PADES Printing, we know how important designs when it comes to
            your branding, print and layout. So our printing team are always on
            hand to get the job done. From the design for print to digital
            design, our team will work hard to your deadlines, not ours.
          </p>
        </Row>
        <Slider {...settings} className="services-slider">
          <div>
            <Col className="services-page-card-container">
              <Card className="gdcard services-page-card ">
                <Card.Img className="gdcard-bg" variant="top" src={gdvector} />
                <div className="black-overlay"></div>
                <Card.Title className="services-page-card-title">
                  Graphic Design
                </Card.Title>
              </Card>
            </Col>
          </div>
          <div>
            <Col className="services-page-card-container">
              <Card className="locard services-page-card ">
                <Card.Img className="locard-bg" variant="top" src={lovector} />
                <div className="black-overlay"></div>
                <Card.Title className="services-page-card-title">
                  Layouting
                </Card.Title>
              </Card>
            </Col>
          </div>
          <div>
            <Col className="services-page-card-container">
              <Card className="cpcard services-page-card ">
                <Card.Img className="cpcard-bg" variant="top" src={cpvector} />
                <div className="black-overlay"></div>
                <Card.Title className="services-page-card-title">
                  Customize Prints
                </Card.Title>
              </Card>
            </Col>
          </div>
          <div>
            <Col className="services-page-card-container">
              <Card className="lfpcard services-page-card ">
                <Card.Img
                  className="lfpcard-bg"
                  variant="top"
                  src={lfpvector}
                />
                <div className="black-overlay"></div>
                <Card.Title className="services-page-card-title">
                  Large Format Printing
                </Card.Title>
              </Card>
            </Col>
          </div>
          <div>
            <Col className="services-page-card-container">
              <Card className="dpcard services-page-card ">
                <Card.Img className="dpcard-bg" variant="top" src={dpvector} />
                <div className="black-overlay"></div>
                <Card.Title className="services-page-card-title">
                  Desktop Printing
                </Card.Title>
              </Card>
            </Col>
          </div>
          <div>
            <Col className="services-page-card-container">
              <Card className="cpcard services-page-card ">
                <Card.Img
                  className="cpcard-bg"
                  variant="top"
                  src={offsetvector}
                />
                <div className="black-overlay"></div>
                <Card.Title className="services-page-card-title">
                  Offset Printing
                </Card.Title>
              </Card>
            </Col>
          </div>
        </Slider>
      </Container>
    </>
  );
};
