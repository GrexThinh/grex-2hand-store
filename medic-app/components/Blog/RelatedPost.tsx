import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";
import { Carousel } from "../carousel";

const RelatedPost = async () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        <div>
          {/* {BlogData.slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="max-w-30 relative h-35 w-30">
                {post.imageNode ? (
                  <Image fill src={post.imageNode} alt="Blog" />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/blog/blog-details`}>
                  {" "}
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))} */}
          <Suspense>
            <Carousel />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
