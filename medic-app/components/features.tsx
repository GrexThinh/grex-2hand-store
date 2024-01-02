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
          className="text-black-600 sm: mx-auto w-9/12 text-2xl font-medium leading-normal sm:text-3xl lg:w-4/12 lg:text-4xl"
        >
          Trusted by Thousands of Happy Customer{" "}
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="mx-auto mb-2 mt-4 w-10/12 leading-normal sm:w-7/12 lg:w-6/12"
        >
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="flex w-full flex-col py-12">
        <motion.div variants={scrollAnimation}>
          <Testimoni />
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default features;
