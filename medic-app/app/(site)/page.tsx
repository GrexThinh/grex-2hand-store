import { Metadata } from "next";
import Blog from "@/components/Product";
import Banner from "@/components/Banner";
import Features from "@/components/features";

export const metadata: Metadata = {
  title: "Grex 2hand Store - Trang chủ",
  description: "",
};

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Blog />
    </main>
  );
}
