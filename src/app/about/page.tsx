import Image from "next/image";
import Bios from "@/components/Bios";

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
