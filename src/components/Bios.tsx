"use client";
import { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";

function Bios() {
  const targetRef0 = useRef<HTMLDivElement>(null);
  const isInView0 = useInView(targetRef0, { once: true });
  const targetRef1 = useRef<HTMLDivElement>(null);
  const isInView1 = useInView(targetRef1, { once: true });
  const targetRef2 = useRef<HTMLDivElement>(null);
  const isInView2 = useInView(targetRef2, { once: true });
  const targetRef3 = useRef<HTMLDivElement>(null);
  const isInView3 = useInView(targetRef3, { once: true });
  const targetRef4 = useRef<HTMLDivElement>(null);
  const isInView4 = useInView(targetRef4, { once: true });
  const targetRef5 = useRef<HTMLDivElement>(null);
  const isInView5 = useInView(targetRef5, { once: true });
  const targetRef6 = useRef<HTMLDivElement>(null);
  const isInView6 = useInView(targetRef6, { once: true });
  const targetRef7 = useRef<HTMLDivElement>(null);
  const isInView7 = useInView(targetRef7, { once: true });
  const targetRef8 = useRef<HTMLDivElement>(null);
  const isInView8 = useInView(targetRef8, { once: true });
  const targetRef9 = useRef<HTMLDivElement>(null);
  const isInView9 = useInView(targetRef9, { once: true });
  const targetRef10 = useRef<HTMLDivElement>(null);
  const isInView10 = useInView(targetRef10, { once: true });

  return (
    <div className="w-[90%] my-16 bg-[#d5d5d5] bg-opacity-20 rounded-2xl text-white">
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef0}
      >
        <div
          className={`m-8 bg-[url('/images/members/angela3.webp')] bg-no-repeat bg-cover bg-center rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
            isInView0 ? "transform-none" : "translate-x-[-150%]"
          } ${isInView0 ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef0}
          style={{
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.39s",
          }}
        ></div>
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 text-center font-dream ${
              isInView0 ? "transform-none" : "translate-x-[150%]"
            } ${isInView0 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef0}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            ANGELA MASSEY
          </h2>
          <h4
            className={`md:text-2xl text-xl font-light text-center font-mont ${
              isInView0 ? "transform-none" : "translate-x-[150%]"
            } ${isInView0 ? "opacity-100" : "opacity-0"}`}
            ref={targetRef0}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            FLUTE
          </h4>
          <p
            className={`font-mont leading-8 font-extralight text-center lg:text-right py-2 lg:pr-4 ${
              isInView0 ? "transform-none" : "translate-x-[150%]"
            } ${isInView0 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef0}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
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
            Chamber Ensemble arranging and performing over 60 recitals each
            year. She holds flute positions with the Southwest Florida Symphony,
            Venice Symphony, and performs with the Sarasota Orchestra. She was
            awarded prizes in the Alexander and Buono Competition, Frank Bowen
            Competition, Myrna Brown Competition, and certificate in the
            Gheorghe Dima International Competition in Romania. Her instructors
            have been Alberto Almarza, Jeanne Baxtresser, Martha Kitterman, Jack
            Wellbaum, and Brooks de Wetter-Smith. She received degrees in flute
            performance from Carnegie Mellon University, Cincinnati
            College-Conservatory of Music, and the University of North Carolina
            at Chapel Hill. For more information, visit{" "}
            <Link
              href={"https://www.angelamasseyflute.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.angelamasseyflute.com
            </Link>
            .
          </p>
        </div>
      </div>
      <hr className="lg:hidden mx-4" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col-reverse"
        ref={targetRef1}
      >
        <div className="md:p-4 p-2">
          <h2
            className={` font-dream md:text-5xl text-4xl py-4 text-center`}
            ref={targetRef1}
            style={{
              transform: isInView1 ? "none" : "translateX(-150%)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            JANE YOO
          </h2>
          <h4
            className={`md:text-2xl text-xl font-mont font-light text-center `}
            ref={targetRef1}
            style={{
              transform: isInView1 ? "none" : "translateX(-150%)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            HARP
          </h4>
          <p
            className={`font-mont py-2 lg:pl-4 text-center lg:text-left leading-8 font-extralight`}
            ref={targetRef1}
            style={{
              transform: isInView1 ? "none" : "translateX(-150%)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Jane Yoo is an internationally recognized harpist and prize-winner,
            known for her performances around the globe. She has garnered
            numerous prestigious awards, including the USA International Harp
            Competition, 1st Prize at the Korean International Harp Competition,
            and the Special Prize at the Szeged International Harp Competition
            in Hungary. In 2022, she earned an Honorable Mention at the Lyon &
            Healy Awards. Most recently, she was named a Young Artist in
            Residence on Minnesota Public Radio’s Performance Today in 2024.
            Jane has been featured as a soloist at the World Harp Congress’s
            “Focus on Youth” event in Hong Kong in 2017 and was selected twice
            as a Kumho Young Concert Artist (2014, 2017). She has performed with
            the Yale Philharmonia under Peter Oundjian and serves as associate
            principal harpist with both the New World Symphony and the Civic
            Orchestra of Chicago. Jane holds a Bachelor of Music from Seoul
            National University and a Master of Music from the Yale School of
            Music. She is the only musician to be admitted to the Artist Diploma
            program at Peabody Institute, where she is currently pursuing a DMA
            program under Dr. June Han.
          </p>
        </div>

        <div
          className="fade-in-right m-8 bg-[url('/images/members/Jane.JPG')] bg-no-repeat bg-cover rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] md:bg-center h-[350px]"
          ref={targetRef1}
          style={{
            transform: isInView1 ? "none" : "translateX(150%)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
          }}
        ></div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef2}
      >
        <div
          className={`m-8 bg-[url('/images/members/Paul.webp')] bg-no-repeat bg-cover md:bg-center rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto h-[350px]  ${
            isInView2 ? "transform-none" : "translate-x-[-150%]"
          } ${isInView2 ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef2}
          style={{
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.39s",
          }}
        ></div>
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 text-center font-dream ${
              isInView2 ? "transform-none" : "translate-x-[150%]"
            } ${isInView2 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef2}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            PAUL AGUILAR
          </h2>
          <h4
            className={`md:text-2xl text-xl font-light text-center font-mont ${
              isInView2 ? "transform-none" : "translate-x-[150%]"
            } ${isInView2 ? "opacity-100" : "opacity-0"}`}
            ref={targetRef2}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            VIOLIN
          </h4>
          <p
            className={`leading-8 py-2 lg:pr-4 font-extralight text-center lg:text-right font-mont ${
              isInView2 ? "transform-none" : "translate-x-[150%]"
            } ${isInView2 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef2}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Venezuelan/American violinist and violist Paul Aguilar joined the
            Houston Symphony viola section in 2024. He has won top prizes at the
            Banff, Bordeaux, Fischoff, Melbourne, Wigmore Hall, and Manhattan
            International chamber music competitions as well as the Grand Prize
            at the Fischoff National Chamber Music Competition. He has appeared
            in concert across North America and Europe, some highlights
            including Carnegie Hall, the Ravinia Festival, ChamberFest
            Cleveland, La Jolla Summerfest, Great Lakes Chamber Music Festival,
            the Heidelberg String Quartet Festival, and the Emilia-Romagna
            Festival. His chamber music collaborators include artists such as
            James Ehnes, Augustin Hadelich, Lawrence Power, Paul Watkins, and
            Jon Kimura Parker. He has studied at the Cleveland Institute of
            Music, Rice University, the Escuela Superior de Música Reina Sofía
            School in Madrid, and the University of Music and Performing Arts,
            in Vienna. His primary influences have been Jaime Laredo, Si-Yan Li,
            Gunter Pichler, and Gerhard Schulz. In addition to traveling and
            performing, Paul enjoys sharing music with his family, at his
            church, and throughout his community. Paul plays on a very fine
            violin and viola that were commissioned from master luthier Kevin
            Lee.
          </p>
        </div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col-reverse"
        ref={targetRef3}
      >
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 text-center font-dream`}
            ref={targetRef3}
            style={{
              transform: isInView3 ? "none" : "translateX(-150%)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            RACHEL AGUILAR
          </h2>
          <h4
            className={`md:text-2xl text-xl font-light text-center font-mont`}
            ref={targetRef3}
            style={{
              transform: isInView3 ? "none" : "translateX(-150%)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            VIOLIN
          </h4>
          <p
            className={`font-mont py-2 lg:pl-4 text-center lg:text-left leading-8 font-extralight`}
            ref={targetRef3}
            style={{
              transform: isInView3 ? "none" : "translateX(-150%)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Originally from Holiday Hills, IL, Rachel Aguilar (Stenzel) grew up
            in a very musical family, beginning her formal training on the piano
            at age five and the violin at age nine. Currently residing in
            Houston, TX, she completed both her bachelor’s and master’s degrees
            in violin performance at the Cleveland Institute of Music (CIM), in
            addition to participating in residencies at Rice University’s
            Shepherd School of Music, Escuela Superior de Musica Reina Sofia
            (Madrid), and the University of Music and Performing Arts in Vienna.
            Although she loves both solo and orchestral playing, Rachel’s true
            passion is for chamber music. As a founding member of the Callisto
            Quartet, Rachel has won top prizes in nearly every major chamber
            music competition, including the Banff International String Quartet
            Competition, Bordeaux International String Quartet Competition,
            Melbourne International Chamber Music Competition, and Fischoff
            National Chamber Music Competition.
          </p>
        </div>

        <div
          className="fade-in-right m-8 bg-[url('/images/members/RachelA.webp')] bg-no-repeat bg-center bg-cover rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px]"
          ref={targetRef3}
          style={{
            transform: isInView3 ? "none" : "translateX(150%)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
          }}
        ></div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef4}
      >
        <div
          className={`m-8 bg-[url('/images/members/PhotoMa.jpg')] bg-no-repeat bg-cover bg-center rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
            isInView4 ? "transform-none" : "translate-x-[-150%]"
          } ${isInView4 ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef4}
          style={{
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.39s",
          }}
        ></div>
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 text-center font-dream ${
              isInView4 ? "transform-none" : "translate-x-[150%]"
            } ${isInView4 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef4}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            YU-MING (ANDREW) MA
          </h2>
          <h4
            className={`md:text-2xl text-xl font-light text-center font-mont ${
              isInView4 ? "transform-none" : "translate-x-[150%]"
            } ${isInView4 ? "opacity-100" : "opacity-0"}`}
            ref={targetRef4}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            VIOLIN
          </h4>
          <p
            className={`font-mont leading-8 font-extralight text-center lg:text-right py-2 lg:pr-4 ${
              isInView4 ? "transform-none" : "translate-x-[150%]"
            } ${isInView4 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef4}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Taiwanese violinist Yu-Ming (Andrew) Ma began his musical studies at
            the age of five. As a soloist, he has been selected to perform
            concerti with orchestras, including the SiungSong Orchestra in
            Taiwan and the Cleveland Institute of Music Orchestra. His chamber
            music experience includes performing at the Kneisel Hall chamber
            music festival, Taos School of Music, and Music@Menlo as an
            international performer. In February 2020, Andrew performed at
            Tongyeong International Music Festival in Tongyeong Korea as a guest
            artist, invited by noted violinist Jinjoo Cho. During the course of
            his musical training, Yu-Ming’s teachers have included Todor Pelev,
            Ivan Zenaty, Jinjoo Cho, Jan Sloman, and Jaime Laredo. Currently,
            Andrew holds a Bachelor of Music degree from Cleveland Institute of
            Music and a Master’s Degree from Rice University’s Shepherd School
            of Music. He is currently pursuing a Doctor of Musical Arts degree
            at Rice University studying under the tutelage of Paul Kantor.
          </p>
        </div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col-reverse"
        ref={targetRef5}
      >
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 text-center font-dream`}
            ref={targetRef5}
            style={{
              transform: isInView5 ? "none" : "translateX(-150%)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            LAURA USISKIN
          </h2>
          <h4
            className={`md:text-2xl text-xl font-light text-center font-mont`}
            ref={targetRef5}
            style={{
              transform: isInView5 ? "none" : "translateX(-150%)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            CELLO
          </h4>
          <p
            className={`font-mont py-2 lg:pl-4 text-center lg:text-left leading-8 font-extralight`}
            ref={targetRef5}
            style={{
              transform: isInView5 ? "none" : "translateX(-150%)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Laura Usiskin enjoys a versatile career as a cellist and educator.
            Her playing has taken her to concert halls throughout the United
            States and Europe, including the Kennedy Center, Palazzo Chigi
            Saracini, Symphony Hall (Boston), Alice Tully Hall, Weill Hall,
            Zankel Hall, Merkin Hall, Miller Theatre, Barge Music, Steinway
            Hall, and Klavierhaus. While completing an Artist-In-Residency with
            the Montgomery Symphony Orchestra, Usiskin founded and served as the
            inaugural Executive Director of the Montgomery Music Project, an El
            Sistema strings program in Montgomery, Alabama. The program, now
            more than 10 years old, has given intensive string instruction to
            hundreds of low-income children across three counties. Usiskin is a
            member of the Bayberry String Quartet as well as the Atlanta-based
            new music group ensemble vim. She has served on the faculty of the
            University of Alabama at Birmingham, through which she founded the
            chamber series Chamber Music @ AEIVA, as well as Birmingham-Southern
            College. Usiskin graduated from Columbia University cum laude with a
            Bachelor of Arts in Neuroscience and Behavior, The Juilliard School
            with a Master of Music, and Yale University with a Doctor of Musical
            Arts. For more information, visit{" "}
            <Link
              href={"https://www.laurausiskin.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.laurausiskin.com
            </Link>
            .
          </p>
        </div>

        <div
          className="fade-in-right m-8 bg-[url('/images/members/10.webp')] bg-no-repeat bg-cover rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] bg-center h-[350px]"
          ref={targetRef5}
          style={{
            transform: isInView5 ? "none" : "translateX(150%)",
            opacity: isInView5 ? 1 : 0,
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
          }}
        ></div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      {/* <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef6}
      >
        <div
          className={`m-8 bg-[url('/images/members/PhotoHilary.JPG')] bg-no-repeat bg-cover bg-center rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
            isInView6 ? "transform-none" : "translate-x-[-150%]"
          } ${isInView6 ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef6}
          style={{
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.39s",
          }}
        ></div>
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 text-center font-dream ${
              isInView6 ? "transform-none" : "translate-x-[150%]"
            } ${isInView6 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef6}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            HILARY GLEN
          </h2>
          <h4
            className={`md:text-2xl text-xl font-light text-center font-mont ${
              isInView6 ? "transform-none" : "translate-x-[150%]"
            } ${isInView6 ? "opacity-100" : "opacity-0"}`}
            ref={targetRef6}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            CELLO
          </h4>
          <p
            className={`font-mont leading-8 font-extralight text-center lg:text-right py-2 lg:pr-4 ${
              isInView6 ? "transform-none" : "translate-x-[150%]"
            } ${isInView6 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef6}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Hilary Glen has been praised as a “standout performer” who has
            successfully “taken on the demanding and most expressive
            responsibilities assigned to the instrument.” She enjoys a varied
            career of teaching and performing. Performances have taken her
            around the world from the Kennedy Center and Carnegie Hall in the US
            to the Concertgebouw in the Netherlands, to Bunkamura Orchard Hall
            in Japan. After maintaining a fulfilling orchestral schedule for
            many years, Dr. Glen has turned her focus to chamber music, touring
            with her duo, Gibbs St. Duo, which was formed with the mission to
            bring awareness to disregarded composers. She currently serves on
            the faculty of Indiana University and the Hochstein School of Music.
            With a mission to promote inclusive and intentional programming, she
            regularly curates interactive chamber music events that feature the
            works of historically excluded composers. She has presented her
            research at National Conferences for the College Music Society and
            at the inaugural 2023 Context Conference at the Eastman School of
            Music. Dr. Glen completed her BM at Indiana University with Janos
            Starker. She earned her MM and DMA with Alan Harris at the Eastman
            School of Music.
          </p>
        </div>
      </div> */}
      {/* <hr className="lg:hidden mx-4 self-center" /> */}

      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef8}
      >
        <div
          className={`m-8 bg-[url('/images/members/Alexandra.jpg')] bg-no-repeat bg-cover bg-center rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
            isInView8 ? "transform-none" : "translate-x-[-150%]"
          } ${isInView8 ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef8}
          style={{
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.39s",
          }}
        ></div>
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 text-center font-dream ${
              isInView8 ? "transform-none" : "translate-x-[150%]"
            } ${isInView8 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef8}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            ALEXANDRA DUNBAR
          </h2>
          <h4
            className={`md:text-2xl text-xl font-light text-center font-mont ${
              isInView8 ? "transform-none" : "translate-x-[150%]"
            } ${isInView8 ? "opacity-100" : "opacity-0"}`}
            ref={targetRef8}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            HARPSICHORD
          </h4>
          <p
            className={`font-mont leading-8 font-extralight text-center lg:text-right py-2 lg:pr-4 ${
              isInView8 ? "transform-none" : "translate-x-[150%]"
            } ${isInView8 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef8}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Dr. Alexandra Snyder Dunbar is an award-winning harpsichordist,
            pianist, and pedagogue. She holds degrees from the Juilliard School,
            Manhattan School of Music, and Interlochen Arts Academy. She
            received a full scholarship as a resident in the C.V. Starr Fellows
            Program as a Doctoral Candidate at Juilliard in the harpsichord
            studio of Lionel Party. Solo performances with orchestra have
            included Orchestra 54, Dorian Baroque Orchestra, The Memphis Chamber
            Music Society, The Symphony of Westchester, and The Chamber
            Orchestra of New York. Dr. Dunbar has collaborated on performance
            projects with the Atlanta Baroque Orchestra, The Dryden Ensemble,
            the Foundlings Ensemble, and The New York Philharmonic. Dr. Dunbar
            is on the music faculty at the University of North Georgia and
            Athens Technical College, and she regularly concertizes and
            maintains a private teaching studio on piano, harpsichord, and
            organ. She is an instructor of Music Theory and Harpsichord at the
            world-renowned Interlochen Arts Camp in Interlochen, Michigan.
            Currently she serves as Organist at Emmanuel Episcopal Church in
            Athens, Georgia, and is harpsichordist and co-artistic director for
            Amethyst Baroque Ensemble.
          </p>
        </div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col-reverse"
        ref={targetRef9}
      >
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 font-dream text-center`}
            ref={targetRef9}
            style={{
              transform: isInView9 ? "none" : "translateX(-150%)",
              opacity: isInView9 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            CAROLINE OWEN
          </h2>
          <h4
            className={`font-mont md:text-2xl text-xl font-light text-center `}
            ref={targetRef9}
            style={{
              transform: isInView9 ? "none" : "translateX(-150%)",
              opacity: isInView9 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            PIANO
          </h4>
          <p
            className={`font-mont py-2 lg:pl-4 text-center lg:text-left  leading-8 font-extralight`}
            ref={targetRef9}
            style={{
              transform: isInView9 ? "none" : "translateX(-150%)",
              opacity: isInView9 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Atlanta native, Caroline Owen has played in venues across the U.S.,
            Canada, and Europe, including the DiMenna Center for Classical Music
            (New York) and the Wiener Saal and Solitär at the Mozarteum
            (Salzburg, Austria). Owen was the winner of the Florida MTNA Young
            Artist Competition and a semifinalist in the 14th International
            Mozart Competition Salzburg and International Keyboard Odyssiad. She
            also won the 2018 Pro-Mozart Society of Atlanta Competition, from
            which she received a scholarship to study at the Salzburg Mozarteum.
            Owen has performed at festivals including PianoFest in the Hamptons,
            PianoTexas, Atlantic Music Festival, and the Prague Piano Festival,
            and she has worked with distinguished artists such as Jean-Efflam
            Bavouzet, Richard Goode, Ursula Oppens, and Pascal Rogé. Owen is
            also committed to promoting new music. She performed as soloist with
            the Orlando Contemporary Chamber Orchestra in its 2021 and 2023
            seasons, and her background in dance has fostered unique
            multidisciplinary collaborations with composer, Badie Khaleghian.
            Owen earned her Doctorate of Music in piano performance from Florida
            State University and is now based in Atlanta where she serves as an
            Artist Affiliate at Emory University and Co-Director of the Decatur
            Fine Arts Academy. For more information, visit{" "}
            <Link
              href={"https://www.carolineowenpiano.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.carolineowenpiano.com
            </Link>
            .
          </p>
        </div>

        <div
          className="fade-in-right m-8 bg-[url('/images/members/16.webp')] bg-no-repeat bg-cover rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] bg-center h-[350px]"
          ref={targetRef9}
          style={{
            transform: isInView9 ? "none" : "translateX(150%)",
            opacity: isInView9 ? 1 : 0,
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
          }}
        ></div>
      </div>

      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col-reverse"
        ref={targetRef7}
      >
        <div className="md:p-4 p-2">
          <h2
            className={`font-dream md:text-5xl text-4xl py-4 text-center`}
            ref={targetRef7}
            style={{
              transform: isInView7 ? "none" : "translateX(-150%)",
              opacity: isInView7 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            KRIS MARSHALL
          </h2>
          <h4
            className={`md:text-2xl text-xl font-light text-center font-mont`}
            ref={targetRef7}
            style={{
              transform: isInView7 ? "none" : "translateX(-150%)",
              opacity: isInView7 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            TRUMPET
          </h4>
          <p
            className={`font-mont py-2 lg:pl-4 text-center lg:text-left leading-8 font-extralight`}
            ref={targetRef7}
            style={{
              transform: isInView7 ? "none" : "translateX(-150%)",
              opacity: isInView7 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
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
            Orchestra. Other significant instructors include Robert Smith and Ed
            Cord. Marshall pursued degrees in trumpet performance at Florida
            State University, Indiana University, and the University of South
            Florida.
          </p>
        </div>

        <div
          className="fade-in-right m-8 bg-[url('/images/members/4.webp')] bg-no-repeat bg-cover rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] bg-center h-[350px]"
          ref={targetRef7}
          style={{
            transform: isInView7 ? "none" : "translateX(150%)",
            opacity: isInView7 ? 1 : 0,
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
          }}
        ></div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      {/* <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef10}
      >
        <div
          className={`m-8 bg-[url('/images/members/ZhangPhoto.webp')] bg-no-repeat bg-cover bg-center rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
            isInView10 ? "transform-none" : "translate-x-[-150%]"
          } ${isInView10 ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef10}
          style={{
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.39s",
          }}
        ></div>
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 text-center font-dream ${
              isInView10 ? "transform-none" : "translate-x-[150%]"
            } ${isInView10 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef10}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            KERU ZHANG
          </h2>
          <h4
            className={`md:text-2xl text-xl font-light text-center font-mont ${
              isInView10 ? "transform-none" : "translate-x-[150%]"
            } ${isInView10 ? "opacity-100" : "opacity-0"}`}
            ref={targetRef10}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            PIANO
          </h4>
          <p
            className={`font-mont leading-8 font-extralight text-center lg:text-right py-2 lg:pr-4 ${
              isInView10 ? "transform-none" : "translate-x-[150%]"
            } ${isInView10 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef10}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Keru Zhang holds a bachelor&apos;s degree from the Cleveland
            Institute of Music and a master&apos;s degree in piano performance
            from The Juilliard School. Keru began her professional training at
            age four in China and later moved to the United States after being
            enrolled into the Pre-College of The Juilliard School at fifteen.
            Keru has performed at prestigious venues, including Alice Tully Hall
            at Lincoln Center, and is winner of the Bauchauer Scholarship
            Competition at Juilliard. She participated in international music
            festivals, including the Beethoven Music Festival in Germany,
            Pianofest in the Hamptons, Orford Musique, and The Gilmore Piano
            Festival. As a passionate chamber musician, Keru worked with members
            of the Kalichstein-Laredo-Robinson Trio, Cavani Quartet, Juilliard
            String Quartet, and she collaborated with the legendary cellist,
            Lynn Harrell. Keru was on piano faculty at the Brooklyn Conservatory
            of Music, as well as the Start-Up Program and staff pianist at the
            School For Strings in NYC. She currently serves as piano faculty at
            the Charleston Academy of Music and maintains her piano studio at
            the Kawai Piano Gallery in Bluffton, SC.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Bios;
