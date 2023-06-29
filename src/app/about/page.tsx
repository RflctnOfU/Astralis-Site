import Bios from "@/components/Bios";
import HeroImage from "@/components/HeroImage";

function About() {
  return (
    <div className="flex flex-col items-center">
      <HeroImage />
      <Bios />
    </div>
  );
}

export default About;
