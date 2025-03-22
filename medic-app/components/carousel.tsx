import Link from "next/link";
import { GridTileImage } from "./tile";
import { ProductData } from "../data/product";

export async function Carousel() {
  const products = ProductData;
  if (!products?.length) return null;

  return (
    <div className="overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-5">
        {products.map((product, i) => (
          <li
            key={product.id}
            className="relative aspect-square h-72 flex-none md:h-96"
          >
            <Link
              href={`/product/${product.id}`}
              className="relative h-full w-full"
            >
              <GridTileImage product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
