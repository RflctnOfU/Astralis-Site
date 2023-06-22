import Image from "next/image";

function Calendar() {
  return (
    <div className="pt-[72px]">
      <Image
        src={"/images/experiment/image-transparent-background.png"}
        alt="image"
        width={1440}
        height={548}
      />
    </div>
  );
}

export default Calendar;
