"use client";

import ProductImage from "@/components/ProductImage";
import ProductDetails from "@/components/ProductDetails";
import ProductDesc from "./ProductDesc";

function ProductSection({ productData }) {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex grid-cols-2 flex-col space-y-5 sm:space-y-0 sm:grid lg:px-10">
        <ProductImage images={productData.images} />
        <ProductDetails productData={productData} />
      </div>
      <div className="sm:px-10">
        <ProductDesc />
      </div>
    </div>
  );
}

export default ProductSection;
