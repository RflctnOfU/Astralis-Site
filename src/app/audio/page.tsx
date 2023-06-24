import Image from "next/image";

function Audio() {
  const videos = [
    {
      name: "Vivaldi - Chamber Concerto in D Major",
      src: "https://www.youtube.com/embed/wTgnQCcYqBw",
    },
    {
      name: "Kurt Bestor - First Noel",
      src: "https://www.youtube.com/embed/rFgHZLOk24M",
    },
    {
      name: "Vaughn-Williams - Greensleeves",
      src: "https://www.youtube.com/embed/bCJHttMaOzk",
    },
    {
      name: "Andriessen - Intermezzo",
      src: "https://www.youtube.com/embed/U-E4MuFzM-s",
    },
    {
      name: "Ibert - Deux Interludes: Mvt. 1",
      src: "https://www.youtube.com/embed/8iaRWpIWD-Q",
    },
    {
      name: "Farrenc - Trio: Mvt. 1",
      src: "https://www.youtube.com/embed/yLgEylUgaFI",
    },
    {
      name: "Dorff - Ballade",
      src: "https://www.youtube.com/embed/mKXSUwx4t9s",
    },
    {
      name: "Harty - In Ireland",
      src: "https://www.youtube.com/embed/d9ZN20MBTrg",
    },
    {
      name: "Beethoven - Romance in F",
      src: "https://www.youtube.com/embed/mVlliRERmzw",
    },
    {
      name: "Liebermann - Soliloquy",
      src: "https://www.youtube.com/embed/zjwc6aRV0E8",
    },
    {
      name: "Saint-Saens - Odelette",
      src: "https://www.youtube.com/embed/Xmu9AQtysv4",
    },
    {
      name: "Kersten - Song of the Woods",
      src: "https://www.youtube.com/embed/XwBOhjWNSHM",
    },
    {
      name: "Dorff - Atomic Turquoise",
      src: "https://www.youtube.com/embed/AeviP7fQSIw",
    },
    {
      name: "Farrenc - Trio: Mvt. 2",
      src: "https://www.youtube.com/embed/8eOWtNqH0nM",
    },
    {
      name: "Mauldin - Mountain Winds: Mvt. 4",
      src: "https://www.youtube.com/embed/6IKIQcAoz40",
    },
  ];
  return (
    <div className="flex flex-col">
      <Image
        src={"/images/experiment/image-transparent-background.png"}
        alt="image"
        width={1440}
        height={548}
      />
      <hr className="text-neutral-200 w-[90%] self-center" />
      <div className="lg:mx-[5%] md:mx-[10%] mx-[16%] py-[5%]">
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-0 bg-[#d5d5d5] bg-opacity-20 rounded-xl">
          {videos.map((video) => {
            return (
              <div
                key={video.name}
                className="flex justify-center items-center w-full p-1"
              >
                <iframe
                  allowFullScreen
                  src={video.src}
                  title={video.name}
                  height={220}
                  width={300}
                  className="rounded-md shadow-xl shadow-[hsl(290,25%,23%)] aspect-video self-center hover:scale-105 hover:opacity-80 opacity-100 duration-300 transition ease-in-out"
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
