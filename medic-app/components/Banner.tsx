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
            background:
              "url(https://img.freepik.com/premium-vector/special-offer-final-sale-banner-red-background-illustration_275806-121.jpg?w=1380) repeat center",
            backgroundSize: "cover",
            height: "400px",
          }}
        ></div>
        <Carousel.Caption>
          <h3>Cheap products</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            objectFit: "cover",
            background:
              "url(https://static.vecteezy.com/system/resources/previews/017/128/530/non_2x/3d-sale-template-promo-banner-with-50-off-discount-special-offer-and-percentage-sign-vector.jpg) repeat center",
            backgroundSize: "cover",
            height: "400px",
          }}
        ></div>
        <Carousel.Caption>
          <h3>Product quality is over 90%</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            objectFit: "cover",
            background:
              "url(https://static.vecteezy.com/system/resources/previews/003/208/782/non_2x/sale-banner-with-place-for-your-text-illustration-free-vector.jpg) repeat center",
            backgroundSize: "cover",
            height: "400px",
          }}
        ></div>
        <Carousel.Caption>
          <h3>Sản phảm còn nguyên mới</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Banner;
