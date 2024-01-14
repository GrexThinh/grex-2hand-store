import { Divider } from "@mui/material";

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
      <Divider />
      <div className="flex flex-col space-y-5">
        <div>
          {" "}
          <p className="py-5 text-lg text-black">Công dụng:</p>
          <p className="text-lg ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div>
          <p className="py-5 text-lg text-black">Phòng tránh:</p>
          <p className="text-lg ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
      <button
        data-popover-target="popover-default"
        data-popover-placement="bottom"
        data-popover-trigger="click"
        type="button"
        className="dark:focus:ring-[#3b5998]/55 mt-10 inline-flex items-center rounded-lg bg-green-500 p-4 text-center text-lg font-medium text-white hover:bg-green-500/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50"
      >
        <svg
          className="me-2 h-4 w-4 animate-ping"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
          />
        </svg>
        Liên hệ ngay
      </button>
      <div
        data-popover
        id="popover-default"
        role="tooltip"
        className="invisible absolute z-10 inline-block w-64 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        <div className="rounded-t-lg border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Thông tin liên hệ
          </h3>
        </div>
        <div className="flex flex-col space-y-3 px-3 py-2">
          <p>
            Số điện thoại:{" "}
            <span className="text-green-400">
              <a href="callto:0912345678">0912345678</a>
            </span>
          </p>
          <p>
            Zalo:{" "}
            <span className="text-green-400">
              <a href="https://zalo.me/0912345678">0912345678</a>
            </span>
          </p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
}

export default ProductInfo;
