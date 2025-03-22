const Label = ({ title }: { title: string }) => {
  return (
    <div className="left absolute top-0 flex w-full">
      <div className="flex rounded items-center border bg-white/70 sm:p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="flex-none bg-red-600 sm:p-2 p-1 text-white">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Label;
