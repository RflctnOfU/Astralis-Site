import Image from "next/image";
import { tourInfo } from "../app/lib/data";
import DateCard from "./DateCard";
interface Tour {
  name: string;
  instruments: string;
  description: string;
  image: string;
  dates: {
    id: number;
    month: string;
    date: string;
    year: string;
    city: string;
    time: string;
  }[];
}

function TourCard({ name, instruments, description, dates, image }: Tour) {
  const img = image;
  console.log(name);
  console.log(image);
  // todo: fix background opacity
  const imageStyle = {
    backgroundImage: "url(" + image + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundOpacity: ".1",
    // width: "100%",
    // height: "100%",
  };

  return (
    <div
      className={`w-full my-4 mx-10 h-auto rounded-2xl flex flex-col justify-center items-center border border-white bg-opacity-25 bg-gray-300`}
      style={imageStyle}
    >
      <h1 className="text-5xl">&quot;{name}&quot;</h1>
      <h2 className="text-2xl">{instruments}</h2>
      <p>{description}</p>
      <div className="flex gap-4 justify-center">
        {dates.map((date) => {
          return (
            <DateCard
              key={date.id}
              month={date.month}
              date={date.date}
              year={date.year}
              city={date.city}
              time={date.time}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TourCard;
