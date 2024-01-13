import React, { Suspense } from "react";
import { Carousel } from "../carousel";

const RelatedPost = async () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="m-7 xl:text-2xl sm:text-base text-xs font-semibold text-black dark:text-white">
          Related Products
        </h4>
        <Suspense>
          <Carousel />
        </Suspense>
      </div>
    </>
  );
};

export default RelatedPost;
