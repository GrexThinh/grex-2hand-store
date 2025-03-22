import React, { useState } from "react";

function ProductDesc({ product }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="border-gray-200 text-center text-sm text-xs text-xs font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400 sm:border-b md:text-lg md:text-lg">
        <ul className="-mb-px flex flex-wrap text-xs md:text-lg">
          <li className="me-2 cursor-pointer">
            <a
              className={`inline-block rounded-t-lg border-b-2 ${
                activeTab === 0
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent"
              } p-2 sm:p-4`}
              onClick={() => handleTabClick(0)}
            >
              Description
            </a>
          </li>
          <li className="me-2 cursor-pointer">
            <a
              className={`inline-block rounded-t-lg border-b-2 ${
                activeTab === 1
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent"
              } p-2 sm:p-4`}
              onClick={() => handleTabClick(1)}
            >
              Additional info
            </a>
          </li>
          <li className="me-2 cursor-pointer">
            <a
              className={`inline-block rounded-t-lg border-b-2 ${
                activeTab === 2
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent"
              } p-2 sm:p-4`}
              onClick={() => handleTabClick(2)}
            >
              Other
            </a>
          </li>
        </ul>
      </div>
      {activeTab == 0 && (
        <div className="flex flex-col space-y-5 text-xs md:text-lg">
          <p className="pt-5">{product.desc}</p>
        </div>
      )}
      {activeTab == 1 && (
        <div className="mt-5 flex flex-col overflow-x-auto rounded-lg shadow-md">
          <div className="overflow-hidden">
            <table className="min-w-full border border-gray-300 bg-white  text-xs md:text-lg">
              <tbody>
                <tr className="border-b ">
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    Product name
                  </td>
                  <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">
                    {product.title}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    Manufacturer
                  </td>
                  <td className="px-6 py-3">{product.manufacturer}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    Usage time
                  </td>
                  <td className="px-6 py-3">{product.usageTime}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    Quantity
                  </td>
                  <td className="px-6 py-3">{product.quantity}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDesc;
