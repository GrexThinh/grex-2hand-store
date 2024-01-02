"use client";

import { useState, useRef, RefObject } from "react";
import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ProductImage({ images }) {
  const [mainImg, setMainImg] = useState(images[0].node);
  const ref = useRef<any>(null);

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }

  return (
    <div className="border-palette-lighter w-full max-w-md rounded border bg-white shadow-lg md:w-1/2">
      <div className="relative h-96">
        <Image
          src={mainImg}
          alt={mainImg}
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="border-palette-lighter relative flex border-t">
        <button
          aria-label="left-scroll"
          className="bg-palette-lighter hover:bg-palette-light absolute  left-0 z-10 h-32 opacity-75"
          onClick={() => scroll(-300)}
        >
          <div className="text-palette-primary mx-1 w-3" />
        </button>
        <div
          style={{ scrollBehavior: "smooth" }}
          className="border-palette-lighter flex w-full space-x-1 overflow-auto border-t"
          ref={ref}
        >
          {images.map((imgItem, index) => (
            <button
              key={index}
              className="relative h-32 w-40 flex-shrink-0 rounded-sm "
              onClick={() => setMainImg(imgItem.node)}
            >
              <Image
                src={imgItem.node}
                alt={imgItem.node}
                layout="fill"
                className=""
              />
            </button>
          ))}
        </div>
        <button
          aria-label="right-scroll"
          className="bg-palette-lighter hover:bg-palette-light absolute  right-0 z-10 h-32 opacity-75"
          onClick={() => scroll(300)}
        >
          <div className="text-palette-primary mx-1 w-3" />
        </button>
      </div>
    </div>
  );
}

export default ProductImage;
