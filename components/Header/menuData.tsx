import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2.1,
    title: "Products",
    newTab: false,
    path: "/products",
  },
  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 2,
    title: "About us",
    newTab: false,
    path: "/about",
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },
];

export default menuData;
