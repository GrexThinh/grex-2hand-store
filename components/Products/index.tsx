"use client";
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ProductData } from "../../data/product";
import ProductCard from "../Product/ProductCard";

const Products = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-x-5 gap-y-5 sm:grid sm:grid-cols-4">
        <div className="relative col-span-2 sm:w-3/4">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search products..."
            required
          />
        </div>

        <FormControl className="">
          <InputLabel className="text-zinc-500">Sort by</InputLabel>
          <Select
            className="w-full text-zinc-500"
            value={10}
            label="Sort by"
            onChange={() => {}}
          >
            <MenuItem value={10} className="text-zinc-500">
              Name
            </MenuItem>
            <MenuItem value={20} className="text-zinc-500">
              Date
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className="">
          <InputLabel className="text-zinc-500">Display quanity</InputLabel>
          <Select
            className="w-full text-zinc-500"
            value={10}
            label="Display quantity"
            onChange={() => {}}
          >
            <MenuItem value={30} className="text-zinc-500">
              All
            </MenuItem>
            <MenuItem value={10} className="text-zinc-500">
              10
            </MenuItem>
            <MenuItem value={20} className="text-zinc-500">
              20
            </MenuItem>
            <MenuItem value={30} className="text-zinc-500">
              30
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-3">
        {ProductData.map((blog, key) => (
          <ProductCard product={blog} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Products;
