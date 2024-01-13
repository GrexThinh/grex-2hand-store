import Link from "next/link";
import { GridTileImage } from "./tile";
import { Product } from "@/types/product";

const mockdata: Product[] = [
  {
    id: "",
    handle: "",
    availableForSale: true,
    title: "",
    description: "",
    descriptionHtml: "",
    options: [],
    priceRange: {
      maxVariantPrice: {
        amount: "100",
        currencyCode: "USD",
      },
      minVariantPrice: {
        amount: "50",
        currencyCode: "USD",
      },
    },
    featuredImage: {
      url: "https://intriphat.com/wp-content/uploads/2023/02/in-hop-thuoc-5.jpg",
      width: 100,
      height: 200,
      altText: "",
    },
    seo: {
      title: "",
      description: "",
    },
    updatedAt: "",
    variants: [],
    images: [],
    tags: [],
  },
  {
    id: "",
    handle: "",
    availableForSale: true,
    title: "",
    description: "",
    descriptionHtml: "",
    options: [],
    priceRange: {
      maxVariantPrice: {
        amount: "100",
        currencyCode: "USD",
      },
      minVariantPrice: {
        amount: "50",
        currencyCode: "USD",
      },
    },
    featuredImage: {
      url: "https://intriphat.com/wp-content/uploads/2023/02/in-hop-thuoc-5.jpg",
      width: 100,
      height: 200,
      altText: "",
    },
    seo: {
      title: "",
      description: "",
    },
    updatedAt: "",
    variants: [],
    images: [],
    tags: [],
  },
  {
    id: "",
    handle: "",
    availableForSale: true,
    title: "",
    description: "",
    descriptionHtml: "",
    options: [],
    priceRange: {
      maxVariantPrice: {
        amount: "100",
        currencyCode: "USD",
      },
      minVariantPrice: {
        amount: "50",
        currencyCode: "USD",
      },
    },
    featuredImage: {
      url: "https://intriphat.com/wp-content/uploads/2023/02/in-hop-thuoc-5.jpg",
      width: 100,
      height: 200,
      altText: "",
    },
    seo: {
      title: "",
      description: "",
    },
    updatedAt: "",
    variants: [],
    images: [],
    tags: [],
  },
];

export async function Carousel() {
  const products = mockdata;

  if (!products?.length) return null;

  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-5">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-72 flex-none md:h-96"
          >
            <Link
              href={`/product/${product.handle}`}
              className="relative h-full w-full"
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                }}
                src={product.featuredImage?.url}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
