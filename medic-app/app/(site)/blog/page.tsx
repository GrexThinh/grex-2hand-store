import BlogData from "@/components/Blog/blogData";
import { Metadata } from "next";
import ProductCard from "@/components/ProductCard"; // Import the ProductCard component

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3">
            {BlogData.map((post, key) => (
              <ProductCard key={key} product={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
