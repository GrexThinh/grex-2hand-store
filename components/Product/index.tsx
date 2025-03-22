import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { ProductData } from "../../data/product";
import ProductCard from "./ProductCard";

const AllProducts = async () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              subtitle: `All our products`,
              description: `We always bring the best products to customers.`,
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-2 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {ProductData.map((prod, key) => (
            <ProductCard key={key} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
