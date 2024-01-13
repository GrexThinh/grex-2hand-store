"use client";

import BackToProductButton from '@/components/BackToProductButton'
import ProductInfo from '@/components/ProductInfo'

function ProductDetails({ productData }) {
  return (
    <div className="flex flex-col space-y-5">
      <BackToProductButton />
      <ProductInfo 
        title={productData.title}
        description={productData.description}
      />
    </div>
  )
}

export default ProductDetails
