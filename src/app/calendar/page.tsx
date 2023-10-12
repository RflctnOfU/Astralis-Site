"use client";
import TourCard from "@/components/TourCard";
import { tourInfo } from "../lib/data";

function Calendar() {
  return (
    <div className="w-full flex flex-col justify-center items-center my-16 ">
      <div className="w-[90%] mx-8 flex flex-col items-center justify-center">
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
    </div>
  );
}

export default Calendar;
