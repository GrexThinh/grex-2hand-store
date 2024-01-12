import Products from "@/components/Products";
import { Divider } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "V-Medic - Sản phẩm",
  description: "",
};

const ProductsPage = () => {
  return (
    <div className="sm:grid grid-cols-6 gap-4 px-5 pb-20 pt-40 flex flex-col">
      <div className="sm:col-span-1 animate_top rounded-md border border-stroke bg-white py-5 px-4 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <div className="flex flex-col gap-10">
          <div>
            <h4 className="mb-3 sm:text-xs lg:text-xl font-semibold text-black dark:text-white">
              Categories
            </h4>
            <ul>
              <li className="mb-2 sm:text-xs lg:text-xl pl-5 transition-all duration-300 last:mb-0 hover:text-primary">
                <a href="#">Blog</a>
              </li>
              <li className="mb-2 sm:text-xs lg:text-xl pl-5 transition-all duration-300 last:mb-0 hover:text-primary">
                <a href="#">Events</a>
              </li>
              <li className="mb-2 sm:text-xs lg:text-xl pl-5 transition-all duration-300 last:mb-0 hover:text-primary">
                <a href="#">Grids</a>
              </li>
              <li className="mb-2 sm:text-xs lg:text-xl pl-5 transition-all duration-300 last:mb-0 hover:text-primary">
                <a href="#">News</a>
              </li>
              <li className="mb-2 sm:text-xs lg:text-xl pl-5 transition-all duration-300 last:mb-0 hover:text-primary">
                <a href="#">Rounded</a>
              </li>
            </ul>
          </div>
          <Divider />
          <div>
            <h4 className="mb-3 sm:text-xs lg:text-xl font-semibold text-black dark:text-white">
              Others
            </h4>
            <ul>
              <li className="mb-2 sm:text-xs lg:text-xl pl-5 transition-all duration-300 last:mb-0 hover:text-primary">
                <a href="#">New</a>
              </li>
              <li className="mb-2 sm:text-xs lg:text-xl pl-5 transition-all duration-300 last:mb-0 hover:text-primary">
                <a href="#">Sale</a>
              </li>
              <li className="mb-2 sm:text-xs lg:text-xl pl-5 transition-all duration-300 last:mb-0 hover:text-primary">
                <a href="#">Coming soon</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sm:col-span-5">
        <Products />
      </div>
    </div>
  );
};

export default ProductsPage;
