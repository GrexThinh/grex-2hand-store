"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const listTestimoni = [
  {
    name: "iezh Robert",
    image:
      "https://i.pinimg.com/originals/bf/2f/24/bf2f247421733a68606c22c4c1d86343.jpg",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image:
      "https://i.pinimg.com/originals/bf/2f/24/bf2f247421733a68606c22c4c1d86343.jpg",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image:
      "https://i.pinimg.com/originals/bf/2f/24/bf2f247421733a68606c22c4c1d86343.jpg",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image:
      "https://i.pinimg.com/originals/bf/2f/24/bf2f247421733a68606c22c4c1d86343.jpg",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
];

const Testimoni = ({}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 block h-4 w-4 cursor-pointer rounded-l-full rounded-r-full transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState<any>(null);

  return (
    <>
     
      <div className="flex w-full items-center justify-end">
        <div className="mt-14 flex w-auto flex-none justify-between">
          <div
            className="hover:text-white-500 mx-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-orange-500 bg-white text-orange-500 transition-all hover:bg-orange-500"
            onClick={sliderRef?.slickPrev}
          >
            {/* <ArrowBack className="h-6 w-6 " /> */}
          </div>
          <div
            className="hover:text-white-500 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-orange-500 bg-white text-orange-500 transition-all hover:bg-orange-500"
            onClick={sliderRef?.slickNext}
          >
            {/* <ArrowNext className="h-6 w-6" /> */}
          </div>
        </div>
      </div>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="flex items-stretch px-3" key={index}>
            <div className="flex flex-col rounded-lg border-2 border-gray-500 p-8 transition-all hover:border-orange-500">
              <div className="flex w-full flex-col items-stretch xl:flex-row xl:items-center">
                <div className="order-2 flex xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height="50"
                    width="50"
                    alt="Icon People"
                  />
                  <div className="ml-5 flex flex-col text-left">
                    <p className="text-black-600 text-lg capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-black-500 text-sm capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="order-1 ml-auto flex flex-none items-center xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="ml-4 flex">
                    <h3>fggfgffggf</h3>
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimoni;
