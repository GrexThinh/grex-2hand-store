"use client";

import { ProductData } from "@/data/product";
import RelatedItems from "@/components/Product/RelatedItems";
import ProductSection from "@/components/Product/ProductSection";
import { useParams } from "next/navigation";

const ProductDetailPage = () => {
  const { id } = useParams();
  const productId = id ? parseInt(id as string, 10) : null;
  const product = ProductData.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <section className="flex flex-col space-y-20 pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-5 md:px-8 2xl:px-0">
          <ProductSection productData={product} />
        </div>
        <div className="mx-5 md:px-8 2xl:px-0">
          <RelatedItems />
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
