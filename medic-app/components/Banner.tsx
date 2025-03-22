"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            objectFit: "cover",
            background: "url(./images/banner/banner1.jpg) center",
            backgroundSize: "cover",
            height: "250px",
            borderRadius: "10px",
          }}
        ></div>
        <Carousel.Caption>
          <h3>Cheap products</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            objectFit: "cover",
            background: "url(./images/banner/banner2.jpg) repeat center",
            backgroundSize: "cover",
            height: "250px",
            borderRadius: "10px",
          }}
        ></div>
        <Carousel.Caption>
          <h3>Product quality is over 90%</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            objectFit: "cover",
            background: "url(./images/banner/banner3.jpg) repeat center",
            backgroundSize: "cover",
            height: "250px",
            borderRadius: "10px",
          }}
        ></div>
        <Carousel.Caption>
          <h3>Product is 90% new</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Banner;
