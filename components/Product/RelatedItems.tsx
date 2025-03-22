import React, { Suspense } from "react";
import { RelatedProducts } from "./RelatedProducts";

const RelatedItems = async () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="m-2 text-xs font-semibold text-black dark:text-white sm:text-base xl:text-2xl">
          Related Products
        </h4>
        <Suspense>
          <RelatedProducts />
        </Suspense>
      </div>
    </>
  );
};

export default RelatedItems;
