"use client";
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import BlogData from "../Blog/blogData";
import ProductCard from "../ProductCard";

const Products = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="grid grid-cols-4 gap-x-5">
        <div className="relative xl:w-3/4 lg:w-1/2 md:w-5/6 sm:w-5/6 w-5/6 col-span-2">
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
            placeholder="Search"
            required
          />
        </div>

        <FormControl sx={{ m: 1, minWidth: 300 }} size="small" className="col-span-1">
          <InputLabel className="text-zinc-500">Sort</InputLabel>
          <Select
            className="text-zinc-500 xl:w-4/5 2xl:w-full lg:w-3/5 md:w-2/5 w-4/12"
            value={10}
            label="Age"
            onChange={() => {}}
          >
            <MenuItem value={10} className="text-zinc-500">
              Ten
            </MenuItem>
            <MenuItem value={20} className="text-zinc-500">
              Twenty
            </MenuItem>
            <MenuItem value={30} className="text-zinc-500">
              Thirty
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 300 }} size="small" className="col-span-1">
          <InputLabel className="text-zinc-500">Size</InputLabel>
          <Select
            className="text-zinc-500 xl:w-4/5 2xl:w-full lg:w-3/5 md:w-2/5 w-4/12"
            value={10}
            label="Age"
            onChange={() => {}}
          >
            <MenuItem value={10} className="text-zinc-500">
              Ten
            </MenuItem>
            <MenuItem value={20} className="text-zinc-500">
              Twenty
            </MenuItem>
            <MenuItem value={30} className="text-zinc-500">
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {BlogData.map((blog, key) => (
          <ProductCard product={blog} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Products;
