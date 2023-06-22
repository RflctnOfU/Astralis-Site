import Image from "next/image";
import Link from "next/link";
import "./styles.css";

function About() {
  return (
    <div className="pt-[72px] flex flex-col">
      <Image
        src={"/images/experiment/image-transparent-background.png"}
        alt="image"
        width={1440}
        height={548}
      />
      <div className="grid grid-cols-2 gap-4 mx-16 bg-[#d5d5d5] bg-opacity-20 rounded-xl my-8">
        <div className="fade-in-left m-8 bg-[url('/images/members/angela4.webp')] bg-no-repeat bg-cover bg-center rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] delay-2"></div>
        <div className=" p-4">
          <h2 className="text-4xl text-center fade-in-right delay-1">
            Angela Massey
          </h2>
          <h4 className="text-2xl font-light text-center fade-in-right delay-2">
            Flute
          </h4>
          <p className="leading-8 font-extralight fade-in-right delay-3">
            Angela Massey’s debut album has been described as “beautiful and
            enchanting, the performances on this CD are magical!” by Jeanne
            Baxtresser, former principal flute of the New York Philharmonic. As
            a soloist, she has been a featured guest artist with the Tryon
            Concert Association, Kosciuszko Foundation in New York City,
            National Flute Association Convention, and invited to perform a
            Vivaldi Piccolo Concerto with the Southwest Florida Symphony.
            Outside of the United States, she has performed in England, France,
            Germany, Italy, Romania, and Switzerland. In regard to chamber
            music, she serves as Artistic Director and founder of the Astralis
            Chamber Ensemble arranging and performing numerous recitals each
            year. She holds a flute/piccolo position with the Southwest Florida
            Symphony and performs regularly with the Sarasota Orchestra. She was
            awarded prizes in the Alexander and Buono Competition, Frank Bowen
            Competition, Myrna Brown Competition, and certificate in the
            Gheorghe Dima International Competition in Romania. Her instructors
            have been Alberto Almarza, Jeanne Baxtresser, Martha Kitterman, Jack
            Wellbaum, and Brooks de Wetter-Smith. She received degrees in flute
            performance from Carnegie Mellon University, Cincinnati
            College-Conservatory of Music, and the University of North Carolina
            at Chapel Hill. For more information, visit{" "}
            <Link
              href={"www.angelamasseyflute.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.angelamasseyflute.com
            </Link>
            .
          </p>
        </div>
        <div className=" p-4">
          <h2 className="text-4xl text-center fade-in-left delay-1">
            Kris Marshall
          </h2>
          <h4 className="text-2xl font-light text-center fade-in-left delay-2">
            Trumpet
          </h4>
          <p className="leading-8 font-extralight fade-in-left delay-3">
            Kris Marshall is principal trumpet with the Southwest Florida
            Symphony Orchestra, Venice Symphony, and has built an active career
            performing with multiple orchestras across the state of Florida,
            including the Jacksonville Symphony, Charlotte Symphony, Naples
            Philharmonic, and regular performances with The Florida Orchestra.
            Marshall has been a featured soloist with the Southwest Florida
            Symphony Orchestra on many occasions and with the Fifth Avenue
            Chamber Orchestra in Naples, Florida. As a founding member of the
            Astralis Chamber Ensemble, he presents several chamber recital tours
            each year and participates in commission projects to increase the
            chamber repertoire for trumpet. He won first prize in the Florida
            Orchestra Young Artist Competition and was later selected to attend
            the Chautauqua Institution Summer Music Festival where he studied
            with Chuck Berginc, principal trumpet with the Phoenix Symphony
            Orchestra. Other significant instructors include Robert Smith,
            principal trumpet with The Florida Orchestra, and Ed Cord, former
            principal trumpet with the Israel Philharmonic and Utah Symphony.
            Marshall pursued degrees in trumpet performance at Florida State
            University, Indiana University, and the University of South Florida.
          </p>
        </div>
        <div className="fade-in-right m-8 bg-[url('/images/members/kris.webp')] bg-no-repeat bg-cover rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] delay-2"></div>
        <div className="fade-in-left m-8 bg-[url('/images/members/megan.webp')] bg-no-repeat bg-cover rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] delay-2"></div>
        <div className=" p-4">
          <h2 className="text-4xl text-center fade-in-right delay-1">
            Megan Chartier
          </h2>
          <h4 className="text-2xl font-light text-center fade-in-right delay-2">
            Cello
          </h4>
          <p className="leading-8 font-extralight fade-in-right delay-3">
            ​Cellist Megan Chartier, hailing from Detroit, has performed as a
            chamber and orchestral cellist throughout North America and Europe.
            In recent years, she has served as Principal Cellist of the Miami
            Symphony Orchestra, Principal Cellist of the Pacific Region
            International Summer Music Academy in Canada, Assistant Principal of
            South Florida Symphony, and Guest Principal Cellist of both Opera
            San Luis Obispo and State Street Ballet in Santa Barbara,
            California. In recent seasons, she has also performed with
            orchestras including San Antonio Symphony, Moscow Symphony
            Orchestra, Palm Beach Symphony Orchestra, Nu Deco Ensemble, and
            Southwest Florida Symphony Orchestra. Megan is an active chamber
            musician and founding member of Miami-based string trio, the Wynwood
            Trio. As a soloist, she was named a semi-finalist in the 2017 PRISMA
            Concerto competition, 1st prize winner of the Ann Arbor Society of
            Musical Arts’ 2015 Young Artist Competition and a winner of the 2015
            Miami Music Festival Concerto Competition, conducted by Grzegorz
            Nowak of the Royal Philharmonic Orchestra. Ms. Chartier holds a
            Bachelor of Music in Performance from Eastern Michigan University
            and a Master of Music in Performance from University of Michigan in
            Ann Arbor, MI. For more information, visit{" "}
            <Link
              href={"https://www.meganchartier.com/"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              https://www.meganchartier.com
            </Link>
            .
          </p>
        </div>
        <div className=" p-4">
          <h2 className="text-4xl text-center fade-in-left delay-1">
            Angela Massey
          </h2>
          <h4 className="text-2xl font-light text-center fade-in-left delay-2">
            Flute
          </h4>
          <p className="leading-8 font-extralight fade-in-left delay-3">
            Angela Massey’s debut album has been described as “beautiful and
            enchanting, the performances on this CD are magical!” by Jeanne
            Baxtresser, former principal flute of the New York Philharmonic. As
            a soloist, she has been a featured guest artist with the Tryon
            Concert Association, Kosciuszko Foundation in New York City,
            National Flute Association Convention, and invited to perform a
            Vivaldi Piccolo Concerto with the Southwest Florida Symphony.
            Outside of the United States, she has performed in England, France,
            Germany, Italy, Romania, and Switzerland. In regard to chamber
            music, she serves as Artistic Director and founder of the Astralis
            Chamber Ensemble arranging and performing numerous recitals each
            year. She holds a flute/piccolo position with the Southwest Florida
            Symphony and performs regularly with the Sarasota Orchestra. She was
            awarded prizes in the Alexander and Buono Competition, Frank Bowen
            Competition, Myrna Brown Competition, and certificate in the
            Gheorghe Dima International Competition in Romania. Her instructors
            have been Alberto Almarza, Jeanne Baxtresser, Martha Kitterman, Jack
            Wellbaum, and Brooks de Wetter-Smith. She received degrees in flute
            performance from Carnegie Mellon University, Cincinnati
            College-Conservatory of Music, and the University of North Carolina
            at Chapel Hill. For more information, visit{" "}
            <Link
              href={"www.angelamasseyflute.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.angelamasseyflute.com
            </Link>
            .
          </p>
        </div>
        <div className="fade-in-right m-8 bg-[url('/images/members/angela4.webp')] bg-no-repeat bg-cover rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] delay-2"></div>
        <div className="fade-in-left m-8 bg-[url('/images/members/angela4.webp')] bg-no-repeat bg-cover rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] delay-2"></div>
        <div className=" p-4">
          <h2 className="text-4xl text-center fade-in-right delay-1">
            Angela Massey
          </h2>
          <h4 className="text-2xl font-light text-center fade-in-right delay-2">
            Flute
          </h4>
          <p className="leading-8 font-extralight fade-in-right delay-3">
            Angela Massey’s debut album has been described as “beautiful and
            enchanting, the performances on this CD are magical!” by Jeanne
            Baxtresser, former principal flute of the New York Philharmonic. As
            a soloist, she has been a featured guest artist with the Tryon
            Concert Association, Kosciuszko Foundation in New York City,
            National Flute Association Convention, and invited to perform a
            Vivaldi Piccolo Concerto with the Southwest Florida Symphony.
            Outside of the United States, she has performed in England, France,
            Germany, Italy, Romania, and Switzerland. In regard to chamber
            music, she serves as Artistic Director and founder of the Astralis
            Chamber Ensemble arranging and performing numerous recitals each
            year. She holds a flute/piccolo position with the Southwest Florida
            Symphony and performs regularly with the Sarasota Orchestra. She was
            awarded prizes in the Alexander and Buono Competition, Frank Bowen
            Competition, Myrna Brown Competition, and certificate in the
            Gheorghe Dima International Competition in Romania. Her instructors
            have been Alberto Almarza, Jeanne Baxtresser, Martha Kitterman, Jack
            Wellbaum, and Brooks de Wetter-Smith. She received degrees in flute
            performance from Carnegie Mellon University, Cincinnati
            College-Conservatory of Music, and the University of North Carolina
            at Chapel Hill. For more information, visit{" "}
            <Link
              href={"www.angelamasseyflute.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.angelamasseyflute.com
            </Link>
            .
          </p>
        </div>
        <div className=" p-4">
          <h2 className="text-4xl text-center fade-in-left delay-1">
            Angela Massey
          </h2>
          <h4 className="text-2xl font-light text-center fade-in-left delay-2">
            Flute
          </h4>
          <p className="leading-8 font-extralight fade-in-left delay-3">
            Angela Massey’s debut album has been described as “beautiful and
            enchanting, the performances on this CD are magical!” by Jeanne
            Baxtresser, former principal flute of the New York Philharmonic. As
            a soloist, she has been a featured guest artist with the Tryon
            Concert Association, Kosciuszko Foundation in New York City,
            National Flute Association Convention, and invited to perform a
            Vivaldi Piccolo Concerto with the Southwest Florida Symphony.
            Outside of the United States, she has performed in England, France,
            Germany, Italy, Romania, and Switzerland. In regard to chamber
            music, she serves as Artistic Director and founder of the Astralis
            Chamber Ensemble arranging and performing numerous recitals each
            year. She holds a flute/piccolo position with the Southwest Florida
            Symphony and performs regularly with the Sarasota Orchestra. She was
            awarded prizes in the Alexander and Buono Competition, Frank Bowen
            Competition, Myrna Brown Competition, and certificate in the
            Gheorghe Dima International Competition in Romania. Her instructors
            have been Alberto Almarza, Jeanne Baxtresser, Martha Kitterman, Jack
            Wellbaum, and Brooks de Wetter-Smith. She received degrees in flute
            performance from Carnegie Mellon University, Cincinnati
            College-Conservatory of Music, and the University of North Carolina
            at Chapel Hill. For more information, visit{" "}
            <Link
              href={"www.angelamasseyflute.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.angelamasseyflute.com
            </Link>
            .
          </p>
        </div>
        <div className="fade-in-right m-8 bg-[url('/images/members/angela4.webp')] bg-no-repeat bg-cover rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] delay-2"></div>
      </div>
    </div>
  );
}

export default About;
