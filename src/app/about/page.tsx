import Bios from "@/components/Bios";
import HeroImage from "@/components/HeroImage";

function About() {
  return (
    <div className="flex flex-col items-center">
      <HeroImage />
      <hr className="text-neutral-200 w-[90%] self-center mb-8" />
      <Bios />
    </div>
  );
}

export default About;
