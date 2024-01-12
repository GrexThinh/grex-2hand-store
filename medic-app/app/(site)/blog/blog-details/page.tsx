import RelatedPost from "@/components/Blog/RelatedPost";
import { productData } from "@/components/Blog/blogData";
import ProductSection from "@/components/ProductSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <ProductSection productData={productData} />
        </div>
        <div className="mx-5 px-4 md:px-8 2xl:px-0">
          <RelatedPost />
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
