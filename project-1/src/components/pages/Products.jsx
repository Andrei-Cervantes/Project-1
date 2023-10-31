import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

import kuyaJ from "./assets/ProductImages/kuyaJ.png";
import fordecio1 from "./assets/ProductImages/fordecio1.png";
import fordecio2 from "./assets/ProductImages/fordecio2.png";
import banner1 from "./assets/ProductImages/banner1.png";
import banner2 from "./assets/ProductImages/banner2.png";
import book1 from "./assets/ProductImages/book1.png";
import book2 from "./assets/ProductImages/book2.png";
import book3 from "./assets/ProductImages/book3.png";
import book4 from "./assets/ProductImages/book4.png";
import book5 from "./assets/ProductImages/book5.png";
import book6 from "./assets/ProductImages/book6.png";
import calendar1 from "./assets/ProductImages/calendar1.png";
import calendar2 from "./assets/ProductImages/calendar2.png";
import calendar3 from "./assets/ProductImages/calendar3.png";
import paper1 from "./assets/ProductImages/paper1.png";
import paper2 from "./assets/ProductImages/paper2.png";
import shirt1 from "./assets/ProductImages/shirt1.png";
import shirt2 from "./assets/ProductImages/shirt2.png";
import pullup2 from "./assets/ProductImages/pullup2.png";
import pullup3 from "./assets/ProductImages/pullup3.png";
import pullup4 from "./assets/ProductImages/pullup4.png";
import bbook2 from "./assets/ProductImages/bbook2.png";
import bbook3 from "./assets/ProductImages/bbook3.png";
import bcard1 from "./assets/ProductImages/bcard1.png";
import bcard2 from "./assets/ProductImages/bcard2.png";
import brochure1 from "./assets/ProductImages/brochure1.png";
import brochure2 from "./assets/ProductImages/brochure2.png";
import tarp1 from "./assets/ProductImages/tarp1.png";
import campaign1 from "./assets/ProductImages/campaign1.png";
import campaign2 from "./assets/ProductImages/campaign2.png";


import FeaturedProductsCard from "../FeaturedProductsCard";

import p1 from "./assets/ProductImages/p1.png";
import p2 from "./assets/ProductImages/p2.png";
import p3 from "./assets/ProductImages/p3.png";
import p4 from "./assets/ProductImages/p4.png";
import p5 from "./assets/ProductImages/p5.png";
import p6 from "./assets/ProductImages/p6.png";
import p7 from "./assets/ProductImages/p7.png";
import p8 from "./assets/ProductImages/p8.png";
import p9 from "./assets/ProductImages/p9.png";
import p10 from "./assets/ProductImages/p10.png";
import p11 from "./assets/ProductImages/p11.png";
import p12 from "./assets/ProductImages/p12.png";
import p13 from "./assets/ProductImages/p13.png";
import p14 from "./assets/ProductImages/p14.png";
import p15 from "./assets/ProductImages/p15.png";
import p16 from "./assets/ProductImages/p16.png";

const paperImages = [paper1, paper2];
const fordecioImages = [fordecio1, fordecio2];
const bannerImages = [banner1, banner2];
const bookImages = [book1, book2, book3, book4, book5, book6];
const calendarImages = [calendar1, calendar2, calendar3];
const shirtImages = [shirt1, shirt2];
const pullupImages = [pullup2, pullup3, pullup4];
const bbookImages = [bbook2, bbook3];
const bcardImages = [bcard2, bcard1];
const brochureImages = [brochure1, brochure2]
const tarpImages = [tarp1, campaign1, campaign2]


export const Products = () => {
  const [hoveredCard1, setHoveredCard1] = useState(false);
  const [hoveredCard2, setHoveredCard2] = useState(false);
  const [hoveredCard3, setHoveredCard3] = useState(false);
  const [hoveredCard4, setHoveredCard4] = useState(false);
  const [hoveredCard5, setHoveredCard5] = useState(false);
  const [hoveredCard6, setHoveredCard6] = useState(false);
  const [hoveredCard7, setHoveredCard7] = useState(false);
  const [hoveredCard8, setHoveredCard8] = useState(false);

  const [hoveredCard9, setHoveredCard9] = useState(false);
  const [hoveredCard10, setHoveredCard10] = useState(false);
  const [hoveredCard11, setHoveredCard11] = useState(false);
  const [hoveredCard12, setHoveredCard12] = useState(false);
  const [hoveredCard13, setHoveredCard13] = useState(false);
  const [hoveredCard14, setHoveredCard14] = useState(false);
  const [hoveredCard15, setHoveredCard15] = useState(false);
  const [hoveredCard16, setHoveredCard16] = useState(false);

  const toggleHoverCard1 = () => {
    setHoveredCard1(true);
    setTimeout(() => setHoveredCard1(false), 4000);
  };
  const toggleHoverCard2 = () => {
    setHoveredCard2(true);
    setTimeout(() => setHoveredCard2(false), 4000);
  };
  const toggleHoverCard3 = () => {
    setHoveredCard3(true);
    setTimeout(() => setHoveredCard3(false), 4000);
  };
  const toggleHoverCard4 = () => {
    setHoveredCard4(true);
    setTimeout(() => setHoveredCard4(false), 4000);
  };
  const toggleHoverCard5 = () => {
    setHoveredCard5(true);
    setTimeout(() => setHoveredCard5(false), 4000);
  };
  const toggleHoverCard6 = () => {
    setHoveredCard6(true);
    setTimeout(() => setHoveredCard6(false), 4000);
  };
  const toggleHoverCard7 = () => {
    setHoveredCard7(true);
    setTimeout(() => setHoveredCard7(false), 4000);
  };
  const toggleHoverCard8 = () => {
    setHoveredCard8(true);
    setTimeout(() => setHoveredCard8(false), 4000);
  };

  const toggleHoverCard9 = () => {
    setHoveredCard9(true);
    setTimeout(() => setHoveredCard9(false), 4000);
  };
  const toggleHoverCard10 = () => {
    setHoveredCard10(true);
    setTimeout(() => setHoveredCard10(false), 4000);
  };
  const toggleHoverCard11 = () => {
    setHoveredCard11(true);
    setTimeout(() => setHoveredCard11(false), 4000);
  };
  const toggleHoverCard12 = () => {
    setHoveredCard12(true);
    setTimeout(() => setHoveredCard12(false), 4000);
  };
  const toggleHoverCard13 = () => {
    setHoveredCard13(true);
    setTimeout(() => setHoveredCard13(false), 4000);
  };
  const toggleHoverCard14 = () => {
    setHoveredCard14(true);
    setTimeout(() => setHoveredCard14(false), 4000);
  };
  const toggleHoverCard15 = () => {
    setHoveredCard15(true);
    setTimeout(() => setHoveredCard15(false), 4000);
  };
  const toggleHoverCard16 = () => {
    setHoveredCard16(true);
    setTimeout(() => setHoveredCard16(false), 4000);
  };

  return (
    <>
      <section className="products-banner">
        <Container className="products-content">
          <Row className="products-h2row">
            <h2 >PRODUCTS</h2>
          </Row>
        </Container>
      </section>
      <div className="products-gradient-bg">
      <section className="fp-section">
        <Container>
          <div>
            <h3>Featured Products</h3>
          </div>
          <Row className="fprow1">
            <Col xs={6}>
              <Card className="product-card">
                <Image src={kuyaJ} />
              </Card>
            </Col>
            <Col xs={6}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={bannerImages} />
              </Card>
            </Col>
          </Row>
          <Row className="fprow2">
            <Col xs={4}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={bookImages} />
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={calendarImages} />
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={fordecioImages} />
              </Card>
            </Col>
          </Row>
          <Row className="fprow1">
            <Col xs={6}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={paperImages} />
              </Card>
            </Col>
            <Col xs={6}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={shirtImages} />
              </Card>
            </Col>
          </Row>
          <Row className="fprow2">
            <Col xs={4}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={pullupImages} />
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={bbookImages} />
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={bcardImages} />
              </Card>
            </Col>
          </Row>
          <Row className="fprow2">
            <Col xs={8}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={brochureImages} />
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="product-card">
                <FeaturedProductsCard imageSources={tarpImages} />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ap-section">
        <Container className="apsection-container">
          <div>
            <h3>Available Products</h3>
          </div>
          <Row className="project-card-row">
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard1
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard1}
              >
                <Card.Img src={p1} />
                <div>
                  <p className="aproduct-name">Safety Vests</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard2
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard2}
              >
                <Card.Img src={p2} />
                <div>
                  <p className="aproduct-name">Business Cards</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard3
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard3}
              >
                <Card.Img src={p3} />
                <div>
                  <p className="aproduct-name">Brochures</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard4
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard4}
              >
                <Card.Img src={p4} />
                <div>
                  <p className="aproduct-name">Customized Umbrellas</p>
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="project-card-row">
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard5
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard5}
              >
                <Card.Img src={p5} />
                <div>
                  <p className="aproduct-name">Customized Mugs</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard6
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard6}
              >
                <Card.Img src={p6} />
                <div>
                  <p className="aproduct-name">Pull-up Banners</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard7
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard7}
              >
                <Card.Img src={p7} />
                <div>
                  <p className="aproduct-name">Safety Long Sleeve Shirts</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard8
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard8}
              >
                <Card.Img src={p8} />
                <div>
                  <p className="aproduct-name">Customized Tumblers</p>
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="project-card-row">
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard9
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard9}
              >
                <Card.Img src={p9} />
                <div>
                  <p className="aproduct-name">ID Cards & Lanyards</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard10
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard10}
              >
                <Card.Img src={p10} />
                <div>
                  <p className="aproduct-name">Customized Tote Bags</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard11
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard11}
              >
                <Card.Img src={p11} />
                <div>
                  <p className="aproduct-name">Business Forms</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard12
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard12}
              >
                <Card.Img src={p12} />
                <div>
                  <p className="aproduct-name">Notebooks</p>
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="project-card-row">
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard13
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard13}
              >
                <Card.Img src={p13} />
                <div>
                  <p className="aproduct-name">Headwear Caps</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard14
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard14}
              >
                <Card.Img src={p14} />
                <div>
                  <p className="aproduct-name">Spiral Notepads</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard15
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard15}
              >
                <Card.Img src={p15} />
                <div>
                  <p className="aproduct-name">Commercial Prints</p>
                </div>
              </Card>
            </Col>
            <Col xs={6} lg={3}>
              <Card
                className={
                  hoveredCard16
                    ? "aproject-card-hover aproject-card"
                    : "aproject-card"
                }
                onMouseEnter={toggleHoverCard16}
              >
                <Card.Img src={p16} />
                <div>
                  <p className="aproduct-name">Book Binds</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    </>
  );
};
