"use client";

import Testimoni from "./Testimoni";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const features = () => {
  return (
    <div className="my-16 flex w-full flex-col" id="testimoni">
      <ScrollAnimationWrapper className="">
        <h4 className="flex justify-center text-3xl font-bold leading-normal text-emerald-900">
          Outstanding products
        </h4>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="flex w-full flex-col">
        <div>
          <Testimoni />
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default features;
