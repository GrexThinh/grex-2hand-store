import React, { Suspense } from "react";
import { Carousel } from "../carousel";

const RelatedPost = async () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Products
        </h4>

        <div>
          <Suspense>
            <Carousel />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
