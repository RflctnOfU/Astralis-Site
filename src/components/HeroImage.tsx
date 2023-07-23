import Image from "next/image";

function HeroImage() {
  return (
    <>
      <Image
        src={"/images/experiment/image-transparent-background.png"}
        alt="image"
        width={1440}
        height={548}
        // className="w-full"
      />
    </>
  );
}

export default HeroImage;
