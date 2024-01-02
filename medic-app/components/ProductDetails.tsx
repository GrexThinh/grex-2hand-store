"use client";

import { useState } from 'react'
import BackToProductButton from '@/components/BackToProductButton'
import ProductInfo from '@/components/ProductInfo'


function ProductDetails({ productData }) {
  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo 
        title={productData.title}
        description={productData.description}
        price={productData.price}
      />
    </div>
  )
}

export default ProductDetails
