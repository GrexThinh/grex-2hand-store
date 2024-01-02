import React from "react";

function Banner() {
  return (
    <div
      id="default-carousel"
      className="relative w-full py-30"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className=" duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-6aeffeca.jpg%3Fv%3D1617396810&w=1920&q=75"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            alt="..."
          />
        </div>
        {/* Item 2 */}
        <div className=" duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://th.bing.com/th/id/OIP.WeR4ObjuqcovoeBrV9F7wQHaCs?rs=1&pid=ImgDetMain"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            alt="..."
          />
        </div>
        {/* Item 3 */}
        <div className=" duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://i.pinimg.com/originals/76/a8/ea/76a8ea33d8fbc7ed64732b66528b027b.png"
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            alt="..."
          />
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
export default Banner;
