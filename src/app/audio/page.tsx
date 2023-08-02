import HeroImage from "@/components/HeroImage";
import { videos } from "../lib/data";
function Audio() {
  return (
    <div className="flex flex-col my-16 justify-center items-center w-full">
      {/* <HeroImage /> */}
      {/* <hr className="text-neutral-200 w-[90%] self-center" /> */}
      <div className="w-[90%] flex justify-center items-center">
        <div className=" grid grid-cols-12 gap-4 p-4 bg-[#d5d5d5] bg-opacity-20 rounded-xl w-full">
          {videos.map((video) => {
            return (
              <div
                key={video.name}
                className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-grow w-full"
                style={{ aspectRatio: 4 / 3 }}
              >
                <iframe
                  allowFullScreen
                  src={video.src}
                  title={video.name}
                  // style={{ aspectRatio: 4 / 3 }}
                  className="rounded-md shadow-xl shadow-[hsl(290,25%,23%)] hover:scale-[102.5%] hover:opacity-80 opacity-100 duration-300 transition ease-in-out w-full h-full"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Audio;
