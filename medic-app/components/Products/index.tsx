"use client";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BlogData from "../Blog/blogData";
import ProductCard from "../ProductCard";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "full",
    },
  },
}));

const Products = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <Search className="border-2">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              className="w-full"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>

        <FormControl sx={{ m: 1, minWidth: 300 }} size="small" className="pr-3">
          <InputLabel className="text-zinc-500">
            Sort
          </InputLabel>
          <Select
            className="w-full text-zinc-500"
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

      <div className="grid grid-cols-3 gap-y-5">
        {BlogData.map((blog, key) => (
          <ProductCard product={blog} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Products;
