import Image from "next/image";
import Link from "next/link";
import Label from "./label";
import Chip from "@mui/material/Chip";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <div className="md:h-120 xl:h-120 border-palette-lighter mx-auto rounded border shadow-lg hover:shadow-blue-500">
        <div className="border-palette-lighter relative h-48 border-b-2 md:h-96">
          <Image
            src={product.mainImage}
            alt={product.mainImage}
            layout="fill"
            className="transform duration-500 ease-in-out hover:scale-110"
          />
          <Label title={"Sale"} />
        </div>
        <div className="relative h-40 lg:h-44">
          <div className="font-primary px-4 pt-4 text-xs font-bold text-slate-900 sm:text-lg md:text-xl xl:text-xl">
            {product.title}
          </div>
          <div className="text-over font-primary h-12 p-4 text-xs text-gray-600 sm:h-12 sm:text-xs md:h-16 md:text-base">
            {product.desc}
          </div>
          <div
            className="absolute bottom-0 right-0 mb-2 flex w-full items-center justify-between rounded-tl-sm 
            pb-1 pr-1 sm:pr-4 sm:pt-2 xl:text-base xl:font-medium"
          >
            <Chip
              label={`${product.quantity}`}
              color="success"
              className="ml-3"
            />
            <button
              type="button"
              className="rounded-lg bg-sky-400 px-3 py-2 text-center text-xs font-medium text-black hover:bg-sky-500 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 sm:text-sm"
            >
              View detail
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
