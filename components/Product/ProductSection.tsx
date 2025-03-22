"use client";

import ProductImage from "@/components/Product/ProductImage";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductDesc from "./ProductDesc";

function ProductSection({ productData }) {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex grid-cols-2 flex-col space-y-5 sm:grid sm:space-y-0 lg:px-10">
        <ProductImage product={productData} />
        <ProductDetails product={productData} />
      </div>
      <div className="sm:px-10">
        <ProductDesc product={productData} />
      </div>
    </div>
  );
}

export default ProductSection;
