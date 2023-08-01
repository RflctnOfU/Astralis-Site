interface DateCard {
  month: string;
  date: string;
  year: string;
  city: string;
  time: string;
}

function DateCard({ month, date, year, city, time }: DateCard) {
  return (
    <div className="bg-gray-300 bg-opacity-40 py-4 px-8 m-2 w-56 h-auto flex flex-col justify-center items-center rounded-xl">
      <h2 className="text-2xl font-mont">{month}</h2>
      <h1 className="text-8xl font-dream">{date}</h1>
      <h2 className="text-xl font-mont">{year}</h2>
      <hr className="w-1/5 h-1 my-5" />
      <h3 className="text-sm font-mont text-center">{city}</h3>
      <h3 className="text-sm font-mont">{time}</h3>
    </div>
  );
}

export default DateCard;
