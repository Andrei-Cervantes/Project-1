import React from "react";
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
import FeaturedProductsCard from "../FeaturedProductsCard";

const fordecioImages = [ fordecio1, fordecio2 ];
const bannerImages = [ banner1, banner2];
const bookImages = [ book1, book2, book3, book4, book5, book6 ];
const calendarImages = [ calendar1, calendar2 ];

export const Products = () => {
  return (
    <>
      <section className="products-banner">
        <Container className="products-content">
          <Row>
            <h2>PRODUCTS</h2>
          </Row>
        </Container>
      </section>
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
        </Container>
      </section>
      <section className="ap-section">
        <Container>
          <div>
            <h3>Available Products</h3>
          </div>
        </Container>
      </section>
    </>
  );
};
