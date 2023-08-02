"use client";

import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/components/HeroImage";
import { SetStateAction, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { publicity, headshots, pastPerformances } from "../lib/data";
// setup different sections - pairings, headshots

function Photos() {
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [photoIndexHead, setPhotoIndexHead] = useState(0);
  // const [opened, setOpened] = useState(false);
  // const [openedHead, setOpenedHead] = useState(false);

  // const openModal = (index: SetStateAction<number>) => {
  //   setPhotoIndex(index);
  //   setOpened(!opened);
  // };
  // const openModalHead = (index: SetStateAction<number>) => {
  //   setPhotoIndexHead(index);
  //   setOpenedHead(!openedHead);
  // };

  // const indexUp = () => {
  //   photoIndex === publicity.length - 1
  //     ? setPhotoIndex(0)
  //     : setPhotoIndex(photoIndex + 1);
  // };
  // const indexDown = () => {
  //   photoIndex === 0
  //     ? setPhotoIndex(publicity.length - 1)
  //     : setPhotoIndex(photoIndex - 1);
  // };
  // const indexUpHead = () => {
  //   photoIndexHead === headshots.length - 1
  //     ? setPhotoIndexHead(0)
  //     : setPhotoIndexHead(photoIndexHead + 1);
  // };
  // const indexDownHead = () => {
  //   photoIndexHead === 0
  //     ? setPhotoIndexHead(headshots.length - 1)
  //     : setPhotoIndexHead(photoIndexHead - 1);
  // };
  return (
    <>
      <div className="w-full flex-col flex justify-center items-center">
        {/* <Image
          src={"/images/experiment/image-transparent-background.png"}
          alt="image"
          width={1440}
          height={548}
        /> */}
        {/* <HeroImage /> */}
        {/* <hr className="text-neutral-200 w-[90%] self-center mb-12" /> */}
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
                    // key={photoIndex}
                    src={photo.src}
                    alt={photo.alt}
                    height={400}
                    width={400}
                    quality={100}
                    style={{ aspectRatio: 7 / 8 }}
                    className="rounded-lg shadow-lg shadow-[hsl(290,25%,23%)]  object-cover object-center overflow-hidden hover:cursor-pointer"
                    // onClick={() => openModal(photoIndex)}
                  />
                </Link>
              );
            })}
          </div>
          <hr />

          {/* <div
            className={`${
              !opened ? "hidden" : ""
            } absolute z-10 w-full h-full bg-gray-500 bg-opacity-60 rounded-2xl`}
          >
            <div className="w-2/3 h-3/4 top-[12.5%] left-[17.67%]  rounded-2xl relative shadow-lg duration-500 group flex items-start justify-end">
              <div
                className="m-4 hover:cursor-pointer z-10 hover:scale-110 duration-300 bg-gray-500 bg-opacity-75 rounded-full p-2"
                onClick={(prev) => {
                  setOpened(!opened);
                }}
              >
                <X />
              </div>
              <Image
                src={publicity[photoIndex].src}
                alt={publicity[photoIndex].alt}
                fill={true}
                className="rounded-2xl object-center object-cover"
              />
              <ChevronLeft
                className="absolute left-6 top-1/2 hidden group-hover:block hover:cursor-pointer hover:scale-110 duration-300 bg-gray-500 bg-opacity-75 rounded-full p-2"
                size={40}
                onClick={indexDown}
              />
              <ChevronRight
                className="absolute top-1/2 right-6 hidden group-hover:block hover:cursor-pointer hover:scale-110 duration-300 bg-gray-500 bg-opacity-75 rounded-full p-2"
                size={40}
                onClick={indexUp}
              />
            </div>
          </div> */}
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
                    className="rounded-lg shadow-lg shadow-[hsl(290,25%,23%)]  object-cover object-center overflow-hidden hover:cursor-pointer"
                    style={{ aspectRatio: 7 / 8 }}
                    // onClick={() => openModalHead(photoIndex)}
                  />
                </Link>
              );
            })}
          </div>
          {/* <div
            className={`${
              !openedHead ? "hidden" : ""
            } absolute z-10 w-full lg:h-1/4 bg-gray-500 bg-opacity-60 rounded-2xl`}
          >
            <div className="lg:w-[53%] lg:h-5/6 lg:top-[7.5%] lg:left-[23.67%]  rounded-2xl relative shadow-lg duration-500 group flex items-start justify-end">
              <div
                className="m-4 hover:cursor-pointer z-10 hover:scale-110 duration-300 bg-gray-500 bg-opacity-75 rounded-full p-2"
                onClick={(prev) => {
                  setOpenedHead(!openedHead);
                }}
              >
                <X />
              </div>
              <Image
                src={headshots[photoIndexHead].src}
                alt={headshots[photoIndexHead].alt}
                // width={768}
                // height={550}
                fill={true}
                className="rounded-2xl object-center object-cover"
              />
              <ChevronLeft
                className="absolute left-6 top-1/2 hidden group-hover:block hover:cursor-pointer hover:scale-110 duration-300 bg-gray-500 bg-opacity-75 rounded-full p-2"
                size={40}
                onClick={indexDownHead}
              />
              <ChevronRight
                className="absolute top-1/2 right-6 hidden group-hover:block hover:cursor-pointer hover:scale-110 duration-300 bg-gray-500 bg-opacity-75 rounded-full p-2"
                size={40}
                onClick={indexUpHead}
              />
            </div>
          </div> */}
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
                    height={400}
                    width={400}
                    quality={100}
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
