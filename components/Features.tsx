"use client";

import OutstandingProducts from "./Product/OutstandingProducts";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const features = () => {
  return (
    <div className="my-16 flex w-full flex-col" id="testimoni">
      <ScrollAnimationWrapper className="">
        <h4 className="flex justify-center text-xl font-bold leading-normal text-emerald-900 lg:text-3xl">
          ⭐ Outstanding products ⭐
        </h4>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="flex w-full flex-col">
        <div>
          <OutstandingProducts />
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default features;
