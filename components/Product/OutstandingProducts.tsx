"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { ProductData } from "../../data/product";

const OutstandingProducts = ({}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 block h-4 w-4 cursor-pointer rounded-l-full rounded-r-full transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-full absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
            className="hover:text-white-500 mx-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-blue-500 bg-white text-cyan-500 transition-all hover:bg-cyan-500"
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
            className="hover:text-white-500 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-blue-500 bg-white text-cyan-500 transition-all hover:bg-cyan-500"
            onClick={sliderRef?.slickNext}
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
        className="h-100 flex justify-items-stretch"
      >
        {ProductData.filter((item) => item.isOutstanding).map((prod, index) => (
          <Link
            href={`/products/${prod.id}`}
            passHref
            key={index}
            className="h-full"
          >
            <div className="flex h-full px-3" key={index}>
              <div className="flex flex-col rounded-lg border-2 border-slate-500 p-3 transition-all hover:border-cyan-500 sm:p-4">
                <div className="flex flex-col space-y-5 sm:grid sm:grid-cols-2 sm:space-x-5">
                  <img
                    src={prod.mainImage}
                    alt="product-image"
                    className="h-40 w-72 sm:h-60 sm:w-72 md:w-96"
                  />

                  <div className="flex flex-col place-content-evenly space-y-5">
                    <p className="flex justify-center text-base font-bold text-primary md:text-xl">
                      {prod.title}
                    </p>
                    <p className="text-over flex justify-center text-base md:text-base">
                      {prod.desc}
                    </p>
                    <button
                      type="button"
                      className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-200 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-l hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
                    >
                      View detail
                    </button>
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

export default OutstandingProducts;
