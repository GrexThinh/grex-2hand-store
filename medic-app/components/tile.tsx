import clsx from "clsx";
import Image from "next/image";
import Label from "./label";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        "group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black",
        {
          relative: label,
          "border-2 border-blue-600": active,
          "border-neutral-200 dark:border-neutral-800": !active,
        },
      )}
    >
      {props.src ? (
        <div className="flex h-full flex-col">
          <img
            className="pt-3 h-3/4 w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
            src={props.src.toString()}
          />
          <div className="flex flex-col items-center justify-center gap-y-5 lg:h-full">
            <div className="text-xs sm:text-xs md:text-xl">Lorem Ipsum</div>
            <div className="text-over text-xs sm:text-sm px-3">
              It is a long established fact that a reader distracted by
              the readable content of a page when looking at its layout.{" "}
            </div>
          </div>
        </div>
      ) : null}
      {label ? <Label title={"New"} /> : null}
    </div>
  );
}
