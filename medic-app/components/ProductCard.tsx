import Image from "next/image";
import Link from "next/link";
import Label from "./label";

const ProductCard = ({ product }) => {
  const handle = product.handle;
  const title = product.title;
  const description = product.description;
  const imageNode = product.imageNode;

  return (
    <Link href={`/blog/${handle}`} passHref>
      <div className="md:h-120 xl:h-120 border-palette-lighter mx-auto rounded border shadow-lg hover:shadow-green-500">
        <div className="border-palette-lighter relative h-48 border-b-2 md:h-96">
          <Image
            src={imageNode}
            alt={imageNode}
            layout="fill"
            className="transform duration-500 ease-in-out hover:scale-110"
          />
          <Label title={"Sale"}/>
        </div>
        <div className="relative lg:h-44 h-40">
          <div className="font-primary text-palette-primary px-4 pt-4 text-xs font-semibold sm:text-lg md:text-xl xl:text-xl">
            {title}
          </div>
          <div className="font-primary p-4 text-xs text-gray-600 sm:text-xs md:text-base">
            {description}
          </div>
          <div
            className="text-palette-dark bg-palette-lighter absolute bottom-0 right-0 mb-2 rounded-tl-sm pb-1 pr-4 pt-2 
            xl:text-base xl:font-medium"
          >
            <button
              type="button"
              className="animate-pulse rounded-lg bg-gradient-to-r from-green-500 to-yellow-200 px-3 py-2 text-center text-sm font-medium text-black hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
            >
              Bấm xem
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
