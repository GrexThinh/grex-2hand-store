import ProductCard from "@/components/Product/ProductCard";

const ProductListings = ({ products }) => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-4 gap-y-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductListings;
