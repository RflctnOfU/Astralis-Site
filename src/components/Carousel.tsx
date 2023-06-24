"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla h-[300px] w-[600px]" ref={emblaRef}>
      <div className="embla__container gap-4">
        <div className="embla__slide bg-[url(/images/carousel/BaroquePhoto4.JPG)] bg-cover bg-no-repeat bg-center rounded-lg">
          {/* <Image
            src={"/images/carousel/BaroquePhoto4.JPG"}
            alt="Baroque Quartet"
            width={400}
            height={100}
          /> */}
        </div>
        <div className="embla__slide bg-[url(/images/carousel/AstralisPhoto1Crop.jpg)] bg-cover bg-center rounded-lg">
          {/* <Image
            src={"/images/carousel/AstralisPhoto1Crop.jpg"}
            alt="Astralis Photo"
            width={400}
            height={100}
          /> */}
        </div>
        <div className="embla__slide bg-[url(/images/carousel/ConcertPhoto.JPG)] bg-cover bg-center rounded-lg">
          {/* <Image
            src={"/images/carousel/ConcertPhoto.JPG"}
            alt=""
            width={400}
            height={100}
          /> */}
        </div>
        <div className="embla__slide bg-[url(/images/carousel/DuoPhoto1crop.jpg)] bg-cover bg-center rounded-lg">
          {/* <Image
            src={"/images/carousel/DuoPhoto1crop.jpg"}
            alt=""
            width={400}
            height={100}
          /> */}
        </div>
        <div className="embla__slide bg-[url(/images/carousel/KrisAngela2edit.JPG)] bg-cover bg-center rounded-lg">
          {/* <Image
            src={"/images/carousel/KrisAngela2edit.JPG"}
            alt=""
            width={400}
            height={100}
          /> */}
        </div>
        <div className="embla__slide bg-[url(/images/carousel/3238E114-24C8-420A-A71D-B787FE8859D7.JPG)] bg-cover bg-center rounded-lg shadow-md">
          <Image
            src={"/images/carousel/3238E114-24C8-420A-A71D-B787FE8859D7.JPG"}
            alt=""
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};
