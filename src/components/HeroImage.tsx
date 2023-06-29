import Image from "next/image";

function HeroImage() {
  return (
    <>
      <Image
        src={"/images/experiment/image-transparent-background.png"}
        alt="image"
        width={1440}
        height={548}
      />
    </>
  );
}

export default HeroImage;
