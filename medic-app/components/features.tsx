"use client"

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
        <motion.h3
          variants={scrollAnimation}
          className="text-black-600 text-3xl font-medium leading-normal flex justify-center"
        >
          Best Seller Products
        </motion.h3>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="flex w-full flex-col">
        <motion.div variants={scrollAnimation}>
          <Testimoni />
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default features;
