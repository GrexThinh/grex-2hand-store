"use client";

import { useState, useRef } from "react";
import Image from "next/image";

function ProductImage({product}) {
  const [mainImg, setMainImg] = useState(product.mainImage);
  const ref = useRef<any>(null);

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }

  return (
    <div className="border-palette-lighter rounded border bg-white shadow-lg sm:w-3/4">
      <div className="image-detail relative">
        <img
          src={mainImg}
          alt={mainImg}
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="border-palette-lighter relative flex border-t">
        <div
          className="flex cursor-pointer items-center hover:bg-cyan-100"
          onClick={() => scroll(-300)}
        >
          <svg
            className="h-6 w-6 text-cyan-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </div>
        <div
          style={{ scrollBehavior: "smooth" }}
          className="border-palette-lighter flex w-full space-x-1 overflow-auto border-t"
          ref={ref}
        >
          {product.images.map((imgItem, index) => (
            <button
              key={index}
              className="relative h-32 w-40 flex-shrink-0 rounded-sm "
              onClick={() => setMainImg(imgItem)}
            >
              <Image src={imgItem} alt={imgItem} layout="fill" className="" />
            </button>
          ))}
        </div>

        <div
          className="flex cursor-pointer items-center hover:bg-cyan-100"
          onClick={() => scroll(300)}
        >
          <svg
            className="h-6 w-6 text-cyan-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProductImage;
