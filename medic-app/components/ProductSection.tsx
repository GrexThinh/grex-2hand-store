"use client";

import ProductImage from "@/components/ProductImage";
import ProductDetails from "@/components/ProductDetails";

function ProductSection({ productData }) {
  return (
    <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="flex items-center gap-8 lg:gap-32.5">
          <ProductImage images={productData.images} />
          <ProductDetails productData={productData} />
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
