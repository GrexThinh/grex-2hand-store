import FunFact from "@/components/FunFact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grex 2hand Store - About us",
  description: "",
};

const AboutPage = () => {
  return (
    <div className="pb-20 pt-40">
      <FunFact />
    </div>
  );
};

export default AboutPage;
