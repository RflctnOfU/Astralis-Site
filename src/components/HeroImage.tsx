import Image from "next/image";

function HeroImage() {
  return (
    <div className="flex justify-center w-full">
      <Image
        src={"/images/experiment/transparent.png"}
        alt="image"
        width={1200}
        height={548}
        loading="lazy"
        // className="w-full"
      />
    </div>
  );
}

export default HeroImage;
