import Image from "next/image";

function HeroImage() {
  return (
    <div className="flex justify-center w-full">
      <Image
        src={"/images/experiment/transparentbanner.png"}
        alt="image"
        width={1200}
        height={548}
        loading="lazy"
      />
    </div>
  );
}

export default HeroImage;
