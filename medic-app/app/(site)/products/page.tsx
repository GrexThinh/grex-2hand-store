import Products from "@/components/Products";
import { Divider } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grex 2hand Store - Product",
  description: "",
};

const ProductsPage = () => {
  return (
    <div className="flex grid-cols-6 flex-col gap-4 px-5 pb-20 pt-40 sm:grid">
      <div className="animate_top rounded-md border border-stroke bg-white px-4 py-5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection sm:col-span-1">
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white sm:text-xs lg:text-lg">
              Product type
            </h4>
            <ul>
              <li className="mb-2 pb-2 pl-5 text-slate-700 transition-all duration-300 last:mb-0 hover:text-cyan-600 sm:text-xs lg:text-lg">
                <a href="#">📱 Smartphone</a>
              </li>
              <li className="mb-2 pb-2 pl-5 text-slate-700 transition-all duration-300 last:mb-0 hover:text-cyan-600 sm:text-xs lg:text-lg">
                <a href="#">💻 Laptop</a>
              </li>
              <li className="mb-2 pb-2 pl-5 text-slate-700 transition-all duration-300 last:mb-0 hover:text-cyan-600 sm:text-xs lg:text-lg">
                <a href="#">⌨️ Keyboard</a>
              </li>
              <li className="mb-2 pb-2 pl-5 text-slate-700 transition-all duration-300 last:mb-0 hover:text-cyan-600 sm:text-xs lg:text-lg">
                <a href="#">🖱️ Mouse</a>
              </li>
            </ul>
          </div>
          <Divider />
          <div>
            <h4 className="mb-3 font-semibold text-black dark:text-white sm:text-xs lg:text-lg">
              Status
            </h4>
            <ul>
              <li className="mb-2 pb-2 pl-5 text-slate-700 transition-all duration-300 last:mb-0 hover:text-cyan-600 sm:text-xs lg:text-lg">
                <a href="#" className="flex gap-3"><div className="animate-ping">👉</div> New</a>
              </li>
              <li className="mb-2 pb-2 pl-5 text-slate-700 transition-all duration-300 last:mb-0 hover:text-cyan-600 sm:text-xs lg:text-lg">
                <a href="#" className="flex gap-3"><div className="animate-ping">👉</div> In Stock</a>
              </li>
              <li className="mb-2 pb-2 pl-5 text-slate-700 transition-all duration-300 last:mb-0 hover:text-cyan-600 sm:text-xs lg:text-lg">
                <a href="#" className="flex gap-3"><div className="animate-ping">👉</div> On Sale</a>
              </li>
              <li className="mb-2 pb-2 pl-5 text-slate-700 transition-all duration-300 last:mb-0 hover:text-cyan-600 sm:text-xs lg:text-lg">
                <a href="#" className="flex gap-3"><div className="animate-ping">👉</div> Coming soon</a>
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
