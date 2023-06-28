import Image from "next/image";

// setup different sections - pairings, headshots

function Photos() {
  const publicity = [
    {
      src: "/images/carousel/BaroquePhoto4.webp",
      alt: "Baroque Quartet 1",
    },
    {
      src: "/images/carousel/AstralisPhoto1Crop.webp",
      alt: "Flute Cello Trio 1",
    },
    {
      src: "/images/carousel/DuoPhoto1crop.webp",
      alt: "Flute Piano Duo",
    },
    {
      src: "/images/carousel/KrisAngela2edit.webp",
      alt: "Flute Trumpet",
    },
    {
      src: "/images/carousel/ConcertPhoto.webp",
      alt: "Flute Harp",
    },
    {
      src: "/images/carousel/Performance.webp",
      alt: "Flute Harp 2",
    },
  ];

  const headshots = [
    {
      src: "",
      alt: "",
    },
  ];
  return (
    <>
      <div className="w-full">
        <Image
          src={"/images/experiment/image-transparent-background.png"}
          alt="image"
          width={1440}
          height={548}
        />
        <div className="w-[90%] m-auto bg-[#d5d5d5] bg-opacity-20 rounded-xl mb-16 p-5 text-center place-items-center flex flex-col align-middle">
          <h2 className="text-4xl font-normal mb-4">Publicity Photos</h2>
          <div className="grid gap-4 grid-cols-12 items-center mb-8">
            {publicity.map((photo) => {
              console.log(photo.src);

              return (
                <Image
                  key={photo.alt}
                  src={photo.src}
                  alt={photo.alt}
                  height={400}
                  width={400}
                  quality={100}
                  className="rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] col-span-12 md:col-span-6 lg:col-span-4 object-cover overflow-hidden"
                  style={{ aspectRatio: 4 / 3 }}
                />
              );
            })}
          </div>
          <hr />
          <div>Headshots Coming soon!</div>
        </div>
      </div>
    </>
  );
}

export default Photos;
