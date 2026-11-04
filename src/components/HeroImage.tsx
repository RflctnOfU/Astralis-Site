import Image from "next/image";

function HeroImage() {
  return (
    <div className="flex justify-center w-full">
      <Image
        src={"/images/experiment/bannernew.png"}
        alt="image"
        width={1640}
        height={924}
        loading="lazy"
      />
    </div>
  );
}

export default HeroImage;
