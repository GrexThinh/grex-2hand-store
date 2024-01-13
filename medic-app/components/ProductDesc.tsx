import React, { useState } from "react";

function ProductDesc() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="sm:border-b border-gray-200 text-center text-sm text-xs text-xs font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400 md:text-lg md:text-lg">
        <ul className="-mb-px flex flex-wrap text-xs md:text-lg">
          <li className="me-2 cursor-pointer">
            <a
              className={`inline-block rounded-t-lg border-b-2 ${
                activeTab === 0
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent"
              } sm:p-4 p-2`}
              onClick={() => handleTabClick(0)}
            >
              Mô tả
            </a>
          </li>
          <li className="me-2 cursor-pointer">
            <a
              className={`inline-block rounded-t-lg border-b-2 ${
                activeTab === 1
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent"
              } sm:p-4 p-2`}
              onClick={() => handleTabClick(1)}
            >
              Thông tin bổ sung
            </a>
          </li>
          <li className="me-2 cursor-pointer">
            <a
              className={`inline-block rounded-t-lg border-b-2 ${
                activeTab === 2
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent"
              } sm:p-4 p-2`}
              onClick={() => handleTabClick(2)}
            >
              Khác
            </a>
          </li>
        </ul>
      </div>
      {activeTab == 0 && (
        <div className="flex flex-col space-y-5 text-xs md:text-lg">
          <p className="pt-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p className="pt-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      )}
      {activeTab == 1 && (
        <div className="mt-5 flex flex-col overflow-x-auto rounded-lg shadow-md">
          <div className="overflow-hidden">
            <table className="min-w-full border border-gray-300 bg-white  text-xs md:text-lg">
              <tbody>
                <tr className="border-b ">
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    Tên thuốc
                  </td>
                  <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">
                    Lorem isak
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    Hãng sản xuất
                  </td>
                  <td className="px-6 py-3">V-Medic</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    Nhập khẩu
                  </td>
                  <td className="px-6 py-3">Úc</td>
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
