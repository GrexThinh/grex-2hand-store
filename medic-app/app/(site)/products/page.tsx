import Products from "@/components/Products";
import { Divider } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "V-Medic - Sản phẩm",
  description: "",
};

const ProductsPage = () => {
  return (
    <div className="pb-20 pt-40">
      <div className="grid grid-cols-4 gap-4 px-20">
        <div className="">
          <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="mb-3 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>
                <ul>
                  <li className="mb-2 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-2 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Events</a>
                  </li>
                  <li className="mb-2 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-2 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">News</a>
                  </li>
                  <li className="mb-2 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div>
              <Divider />
              <div>
                <h4 className="mb-3 text-2xl font-semibold text-black dark:text-white">
                  Others
                </h4>
                <ul>
                  <li className="mb-2 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">New</a>
                  </li>
                  <li className="mb-2 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Sale</a>
                  </li>
                  <li className="mb-2 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Coming soon</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
