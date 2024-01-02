import FunFact from "@/components/FunFact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "V-Medic - Về chúng tôi",
  description: "",
};

const AboutPage = () => {
  return (
    <div className="pb-20">
      <FunFact />
    </div>
  );
};

export default AboutPage;
