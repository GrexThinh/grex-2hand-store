"use client";

import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProductInfo from "@/components/Product/ProductInfo";

function ProductDetails({ product }) {
  return (
    <div className="flex flex-col space-y-5">
      <Link href="/products" passHref>
        <div className="pb-2 hover:underline">
          <div className="text-xs sm:text-lg">
            <ArrowBackIosIcon className="pb-1" /> Back to all products
          </div>
        </div>
      </Link>
      <ProductInfo product={product} />
    </div>
  );
}

export default ProductDetails;
