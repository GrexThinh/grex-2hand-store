function ProductInfo({ title, description }) {
  return (
    <div className=" font-primary">
      <div className="text-palette-primary px-1 pt-4 text-xl font-medium text-red-600">
        Sale
      </div>
      <div className="text-palette-primary px-1 py-4 text-xl font-medium text-green-600">
        V-Medic Pharma
      </div>
      <h1 className="text-palette-primary py-2 text-3xl font-extrabold leading-relaxed sm:py-4">
        {title}
      </h1>
      <p className="text-lg ">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
    </div>
  );
}

export default ProductInfo;
