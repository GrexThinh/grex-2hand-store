import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const handle = product.handle;
  const title = product.title;
  const description = product.description;
  const price = product.price;
  const imageNode = product.imageNode;

  return (
    <Link href={`/blog/${handle}`} passHref>
      <div className="md:h-120 xl:h-120 border-palette-lighter mx-auto rounded border shadow-lg md:w-80 xl:w-80">
        <div className="border-palette-lighter relative h-44 border-b-2 md:h-72 xl:h-80">
          <Image
            src={imageNode}
            alt={imageNode}
            layout="fill"
            className="transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="relative h-48">
          <div className="font-primary text-palette-primary px-4 pt-4 font-semibold xl:text-xl text-sm md:text-xl sm:text-xl lg:text-xl">
            {title}
          </div>
          <div className="font-primary p-4 text-gray-600 text-xs xl:text-lg sm:text-sm md:text-lg lg:text-xl">
            {description}
          </div>
          <div
            className="text-palette-dark bg-palette-lighter absolute bottom-0 right-0 mb-2 rounded-tl-sm pb-1 pr-4 pt-2 
            xl:text-base xl:font-medium"
          >
            <div className="flex space-x-2 items-center">
              <p className="text-xs xl:text-lg sm:text-sm md:text-lg lg:text-xl">More details</p>
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white text-xs"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 15"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.9"
                  d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
