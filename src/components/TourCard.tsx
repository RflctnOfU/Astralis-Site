import Image from "next/image";
import { tourInfo } from "../app/lib/data";
import DateCard from "./DateCard";
interface Tour {
  id: string;
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

function TourCard({ id, name, instruments, description, dates, image }: Tour) {
  const img = "url(" + image + ")";
  console.log(name);
  console.log(img);

  return (
    <div
      id={id}
      className={`tour `}
      // style={imageStyle}
    >
      <Image
        alt={name}
        src={image}
        width={1440}
        height={768}
        className="w-full h-full absolute -z-10 object-cover mix-blend-overlay rounded-xl"
      />
      <h1 className="text-5xl font-dream text-center">&quot;{name}&quot;</h1>
      <h2 className="text-2xl font-mont text-center">{instruments}</h2>
      <p className="font-mont text-center px-4 lg:w-1/2 md:w-2/3 w-full">
        {description}
      </p>
      <div className="lg:w-full flex md:flex-row md:flex-wrap flex-col justify-center">
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
