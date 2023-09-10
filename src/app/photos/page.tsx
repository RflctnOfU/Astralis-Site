"use client";

import Link from "next/link";
import Image from "next/image";

import { publicity, headshots, pastPerformances } from "../lib/data";
// add loading.tsx page
function Photos() {
  return (
    <>
      <div className="w-full flex-col flex justify-center items-center">
        <div className="w-[90%] m-auto bg-[#d5d5d5] bg-opacity-20 rounded-xl my-16 p-5 text-center place-items-center flex flex-col align-middle relative">
          <h2 className="text-4xl font-normal mb-4">Publicity Photos</h2>
          <div className="grid gap-4 lg:grid-cols-10 items-center">
            {publicity.map((photo, photoIndex) => {
              return (
                <Link
                  key={photoIndex}
                  href={photo.src}
                  target="_blank"
                  className="rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] col-span-10 md:col-span-6 lg:col-span-2 "
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    height={400}
                    width={400}
                    quality={100}
                    loading="lazy"
                    style={{ aspectRatio: 7 / 8 }}
                    className="rounded-lg shadow-lg shadow-[hsl(290,25%,23%)]  object-cover object-center overflow-hidden hover:cursor-pointer"
                  />
                </Link>
              );
            })}
          </div>
          <hr />
        </div>
        <div className="w-[90%] m-auto bg-[#d5d5d5] bg-opacity-20 rounded-xl mb-16 p-5 text-center place-items-center flex flex-col align-middle relative">
          <h2 className="text-4xl font-normal mb-4">Headshots</h2>
          <div className="grid gap-4 grid-cols-10 items-center">
            {headshots.map((photo, photoIndex) => {
              return (
                <Link
                  key={photoIndex}
                  href={photo.src}
                  target="_blank"
                  className="rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] col-span-10 md:col-span-6 lg:col-span-2 "
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    height={400}
                    width={400}
                    quality={100}
                    loading="lazy"
                    className="rounded-lg shadow-lg shadow-[hsl(290,25%,23%)]  object-cover object-center overflow-hidden hover:cursor-pointer"
                    style={{ aspectRatio: 7 / 8 }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-[90%] m-auto bg-[#d5d5d5] bg-opacity-20 rounded-xl mb-16 p-5 text-center place-items-center flex flex-col align-middle relative">
          <h2 className="text-4xl font-normal mb-4">Past Performances</h2>
          <div className="grid gap-4 grid-cols-10 items-center">
            {pastPerformances.map((photo, photoIndex) => {
              return (
                <Link
                  key={photoIndex}
                  href={photo.src}
                  target="_blank"
                  className="rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] col-span-10 md:col-span-6 lg:col-span-2 "
                >
                  <Image
                    key={photoIndex}
                    src={photo.src}
                    alt={photo.alt}
                    height={300}
                    width={300}
                    quality={100}
                    loading="lazy"
                    className="rounded-lg shadow-lg shadow-[hsl(290,25%,23%)]  object-cover object-center overflow-hidden hover:cursor-pointer"
                    style={{ aspectRatio: 7 / 8 }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
