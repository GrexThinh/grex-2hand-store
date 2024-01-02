import { Metadata } from "next";
import Blog from "@/components/Blog";
import Banner from "@/components/Banner";
import Features from "@/components/features";

export const metadata: Metadata = {
  title: "V-Medic - Trang chủ",
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
