"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import getScrollAnimation from "@/app/utils/getScrollAnimation";
import Testimoni from "./Testimoni";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const features = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="my-16 flex w-full flex-col" id="testimoni">
      <ScrollAnimationWrapper className="">
        <h4 className="text-black-600 flex justify-center text-3xl font-medium leading-normal">
          Sản phẩm nổi bật
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
