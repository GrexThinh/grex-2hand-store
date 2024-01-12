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
        <div className="flex">
          <img
            className="relative h-1/3 w-2/3 object-contain transition duration-300 ease-in-out group-hover:scale-105"
            src={props.src.toString()}
          />
          <div className="relative w-full">jkdfkdmfkmdf</div>
        </div>
      ) : null}
      {label ? (
        <Label
          title={label.title}
        />
      ) : null}
    </div>
  );
}
