import HeroImage from "@/components/HeroImage";
import TourCard from "@/components/TourCard";
import { tourInfo } from "../lib/data";
// todo: update when itinerary is figured

function Calendar() {
  return (
    <div className="w-[90%] m-auto py-[5%] flex flex-col items-center">
      <HeroImage />
      <div className="text-center text-5xl font-light pb-16 mx-4">
        Coming soon!
      </div>
      {tourInfo.map((tour) => {
        return (
          <TourCard
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
