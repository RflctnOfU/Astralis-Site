import HeroImage from "@/components/HeroImage";
import Image from "next/image";
import type { Metadata } from "next";
import { images } from "./lib/data";
export const metadata: Metadata = {
  title: "Astralis Chamber Ensemble",
  description:
    "Website of the Astralis Chamber Ensemble, featuring information about the ensemble including it's members, the calendar of upcoming events, publicity photos, and audio samples of past performances",
  openGraph: {
    type: "website",
    url: "https://www.astralisensemble.com",
    description:
      "The Astralis Chamber Ensemble is an innovative and dynamic ensemble performing with much acclaim across the globe. Through creative programming and presentations on the works performed, Astralis aims to make classical music more accessible and for audiences to make a lasting connection to the music.",
    siteName: "Astralis Chamber Ensemble",
    images: [
      {
        url: "https://www.astralisensemble.com/screenshots/homepage.png",
        alt: "Astralis Homepage screenshot showing banner with photos of core members",
      },
    ],
  },
};
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full pt-8">
      <HeroImage />
      <hr className="text-neutral-200 w-[90%] self-center" />
      <div className="w-full m-auto py-[5%] flex flex-col items-center justify-center">
        <div className="pb-[5%] font-mont font-light md:text-xl text-center">
          <p className="lg:mx-16 m-4">
            The Astralis Chamber Ensemble is an innovative and dynamic ensemble
            performing with much acclaim across the globe. Through creative
            programming and presentations on the works performed, Astralis aims
            to make classical music more accessible and for audiences to make a
            lasting connection to the music. Concert tours are arranged to
            include rural communities and reach audiences without access to
            classical music. These award-winning musicians represent decades of
            experience across many of the world’s major venues and notable
            concert series. With instrument pairings that are unique worldwide,
            the ensemble expands the repertoire available through commissions
            and arrangements. ACE aims to support the development of the arts
            through new compositions and reach communities of all backgrounds
            through music.
          </p>
        </div>
        <hr className="text-neutral-200 w-[90%] self-center" />
        <div className="pb-[5%] font-mont font-light md:text-xl text-center">
          <p className="lg:mx-16 m-4">
            Thank you to our donors for their generosity:
          </p>
          <p>
            <span className="underline text-3xl">Gold</span>
          </p>
          <ul>
            <li>The Gregory Family</li>
            <li>Martha Shippy</li>
          </ul>
          <p className="pt-4">
            <span className="underline text-3xl">Silver</span>
          </p>
          <ul>
            <li>Anonymous</li>
            <li>David and Karen Paulin</li>
            <li>Anonymous</li>
          </ul>
          <p className="pt-4">
            <span className="underline text-3xl">Bronze</span>
          </p>
          <ul>
            <li>Diane and John Colin</li>
            <li>Elizabeth Meador</li>
            <li>Jesse Hughes</li>
            <li>Greg Lane</li>
            <li>Janet Ullman</li>
          </ul>
        </div>
        <hr className="text-neutral-200 w-[90%] self-center" />

        <div className="m-4 lg:m-8 p-4 grid grid-cols-12 gap-4 bg-[#d5d5d5] bg-opacity-20 rounded-xl">
          {images.map((image) => {
            return (
              <Image
                key={image.alt}
                src={image.src}
                alt={image.alt}
                height={500}
                width={400}
                quality={100}
                loading="lazy"
                className="rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] col-span-12 md:col-span-6 lg:col-span-3 object-cover overflow-hidden objec"
                style={{ aspectRatio: 5 / 5 }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
