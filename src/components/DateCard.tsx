interface DateCard {
  month: string;
  date: string;
  year: string;
  city: string;
  time: string;
}

function DateCard({ month, date, year, city, time }: DateCard) {
  return (
    <div className="bg-gray-300 bg-opacity-30 py-4 px-16 w-auto h-auto flex flex-col justify-center items-center rounded-xl">
      <h2 className="text-2xl">{month}</h2>
      <h1 className="text-8xl">{date}</h1>
      <h2 className="text-xl">{year}</h2>
      <hr className="w-1/5 h-1 my-5" />
      <h3 className="text-md">{city}</h3>
      <h3 className="text-md">{time}</h3>
    </div>
  );
}

export default DateCard;
