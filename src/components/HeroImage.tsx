import Image from "next/image";

function HeroImage() {
  return (
    <div className="flex justify-center w-full">
      <Image
        src={"/images/experiment/3.png"}
        alt="image"
        width={1200}
        height={548}
        // className="w-full"
      />
    </div>
  );
}

export default HeroImage;
