"use client";
import Link from "next/link";
import HeroImage from "@/components/HeroImage";
import TourCard from "@/components/TourCard";
import { tourInfo } from "../lib/data";
import { NextPage } from "next";
// todo: update when itinerary is figured

function Calendar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full m-auto pb-[5%] flex flex-col items-center">
      <HeroImage />
      <div className="text-center text-5xl font-light pb-16 mx-4 font-mont">
        Coming Soon!
      </div>
      {tourInfo.map((tour) => {
        return (
          <TourCard
            id={tour.name}
            key={tour.name}
            name={tour.name}
            image={tour.image}
            instruments={tour.instruments}
            description={tour.description}
            dates={tour.dates}
          />
        );
      })}
    </div>
  );
}

export default Calendar;
