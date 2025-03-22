import { Metadata } from "next";
import AllProducts from "@/components/Product";
import Banner from "@/components/Banner";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Grex 2hand Store - Home",
  description: "",
};

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <AllProducts />
    </main>
  );
}
