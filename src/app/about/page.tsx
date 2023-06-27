import Image from "next/image";
import "./styles.css";
import { Ysabeau } from "next/font/google";
import Bios from "@/components/Bios";
const ysabeau = Ysabeau({
  variable: "--font-ysabeau",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  subsets: ["latin", "latin-ext"],
});

function About() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={"/images/experiment/image-transparent-background.png"}
        alt="image"
        width={1440}
        height={548}
      />
      <Bios />
    </div>
  );
}

export default About;
