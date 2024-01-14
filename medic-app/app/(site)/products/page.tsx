import Products from "@/components/Products";
import { Divider } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "V-Medic - Sản phẩm",
  description: "",
};

const ProductsPage = () => {
  return (
    <div className="flex grid-cols-6 flex-col gap-4 px-5 pb-20 pt-40 sm:grid">
      <div className="animate_top rounded-md border border-stroke bg-white px-4 py-5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection sm:col-span-1">
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white sm:text-xs lg:text-xl">
              Loại sản phẩm
            </h4>
            <ul>
              <li className="mb-2 pb-1 pl-5 transition-all duration-300 last:mb-0 hover:text-green-500 sm:text-xs lg:text-xl">
                <a href="#">Loại A</a>
              </li>
              <li className="mb-2 pb-1 pl-5 transition-all duration-300 last:mb-0 hover:text-green-500 sm:text-xs lg:text-xl">
                <a href="#">Loại B</a>
              </li>
              <li className="mb-2 pb-1 pl-5 transition-all duration-300 last:mb-0 hover:text-green-500 sm:text-xs lg:text-xl">
                <a href="#">Loại C</a>
              </li>
              <li className="mb-2 pb-1 pl-5 transition-all duration-300 last:mb-0 hover:text-green-500 sm:text-xs lg:text-xl">
                <a href="#">Loại D</a>
              </li>
              <li className="mb-2 pb-1 pl-5 transition-all duration-300 last:mb-0 hover:text-green-500 sm:text-xs lg:text-xl">
                <a href="#">Loại E</a>
              </li>
            </ul>
          </div>
          <Divider />
          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white sm:text-xs lg:text-xl">
              Khác
            </h4>
            <ul>
              <li className="mb-2 pb-1 pl-5 transition-all duration-300 last:mb-0 hover:text-green-500 sm:text-xs lg:text-xl">
                <a href="#">Mới</a>
              </li>
              <li className="mb-2 pb-1 pl-5 transition-all duration-300 last:mb-0 hover:text-green-500 sm:text-xs lg:text-xl">
                <a href="#">Hàng sẵn có</a>
              </li>
              <li className="mb-2 pb-1 pl-5 transition-all duration-300 last:mb-0 hover:text-green-500 sm:text-xs lg:text-xl">
                <a href="#">Giảm giá</a>
              </li>
              <li className="mb-2 pb-1 pl-5 transition-all duration-300 last:mb-0 hover:text-green-500 sm:text-xs lg:text-xl">
                <a href="#">Sắp ra mắt</a>
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
