"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const listTestimoni = [
  {
    name: "iezh Robert",
    image:
      "https://www.netmeds.com/images/product-v1/600x600/966767/patanjali_nutrela_natural_spirulina_tablet_60s_2_0.jpg",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far the...",
  },
  {
    name: "iezh Robert",
    image:
      "https://www.netmeds.com/images/product-v1/600x600/966767/patanjali_nutrela_natural_spirulina_tablet_60s_2_0.jpg",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far the...",
  },
  {
    name: "iezh Robert",
    image:
      "https://www.netmeds.com/images/product-v1/600x600/966767/patanjali_nutrela_natural_spirulina_tablet_60s_2_0.jpg",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far the...",
  },
  {
    name: "iezh Robert",
    image:
      "https://www.netmeds.com/images/product-v1/600x600/966767/patanjali_nutrela_natural_spirulina_tablet_60s_2_0.jpg",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far the...",
  },
  {
    name: "iezh Robert",
    image:
      "https://www.netmeds.com/images/product-v1/600x600/966767/patanjali_nutrela_natural_spirulina_tablet_60s_2_0.jpg",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far the...",
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
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 790,
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
      <div className="flex w-full items-center justify-end px-2 pb-5">
        <div className="flex w-auto flex-none justify-between">
          <div
            className="hover:text-white-500 mx-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-orange-500 bg-white text-orange-500 transition-all hover:bg-orange-500"
            onClick={sliderRef?.slickPrev}
          >
            <svg
              className="dark:text-green h-6 w-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
          </div>
          <div
            className="hover:text-white-500 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-orange-500 bg-white text-orange-500 transition-all hover:bg-orange-500"
            onClick={sliderRef?.slickNext}
          >
            <svg
              className="dark:text-green h-6 w-6 text-green-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>
      </div>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <Link href={`/blog/blog-details`} passHref>
            <div className="flex px-3" key={index}>
              <div className="flex flex-col rounded-lg border-2 border-gray-500 p-8 transition-all hover:border-orange-500">
                <div className="flex space-x-5">
                  <Image
                    src={listTestimonis.image}
                    height="300"
                    width="200"
                    alt="Icon People"
                  />
                  <div className="flex flex-col place-content-evenly space-y-5">
                    <p>{listTestimonis.name}</p>
                    <p className="">{listTestimonis.testimoni}</p>
                    <div className="flex space-x-3 items-center">
                      <p className="xl:text-xl md:text-xl sm:text-sm">More details</p>
                      <svg
                        className="h-6 w-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 15"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.9"
                          d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default Testimoni;
