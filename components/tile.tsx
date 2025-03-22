import clsx from "clsx";
import Label from "./label";

export function GridTileImage({ product }) {
  return (
    <div
      className={clsx(
        "group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black",
      )}
    >
      {product.mainImage ? (
        <div className="flex h-full flex-col">
          <img
            className="h-3/4 w-full object-contain pt-3 transition duration-300 ease-in-out group-hover:scale-105"
            src={product.mainImage}
          />
          <div className="flex flex-col items-center justify-center gap-y-5 lg:h-full">
            <div className="text-xs sm:text-xs md:text-xl">{product.title}</div>
            <div className="text-over px-3 text-xs sm:text-sm">
              {product.desc}
            </div>
          </div>
        </div>
      ) : null}
      <Label title={"On Sale"} />
    </div>
  );
}
