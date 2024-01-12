const Label = ({ title }: { title: string }) => {
  return (
    <div className="left absolute top-0 flex w-full">
      <div className="flex items-center border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="flex-none bg-green-600 p-2 text-white">
          New
        </h3>
      </div>
    </div>
  );
};

export default Label;
