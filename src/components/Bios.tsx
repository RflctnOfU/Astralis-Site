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
            Angela Massey’s debut album, “The Elements,” has been described as
            “beautiful and enchanting, the performances on this CD are magical!”
            by Jeanne Baxtresser, former principal flute of the New York
            Philharmonic. As a soloist, she has been a featured guest artist
            with the Tryon Concert Association, Kosciuszko Foundation in New
            York City, Artist Series of Tallahassee, and the National Flute
            Association. Outside of the United States, she has performed in
            England, France, Germany, Italy, Romania, and Switzerland. As
            Artistic Director and flutist of the Astralis Chamber Ensemble, she
            arranges and performs over sixty recitals each year. She holds a
            flute and piccolo position with the Southwest Florida Symphony and
            is the flute instructor at Florida Gulf Coast University. She was
            awarded prizes in the Alexander and Buono Competition, Frank Bowen
            Competition, Myrna Brown Competition, Tiziano Rosetti Competition in
            Switzerland, and a certificate in the Gheorghe Dima International
            Competition in Romania. Her instructors have been Jeanne Baxtresser,
            Alberto Almarza, Jack Wellbaum, Martha Kitterman, and Brooks de
            Wetter- Smith. She received degrees in flute performance from
            Carnegie Mellon University, University of Cincinnati
            College-Conservatory of Music, and UNC at Chapel Hill. For more
            information, visit{" "}
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
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef2}
      >
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 text-center font-dream ${
              isInView2 ? "transform-none" : "translate-x-[-150%]"
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
              isInView2 ? "transform-none" : "translate-x-[-150%]"
            } ${isInView2 ? "opacity-100" : "opacity-0"}`}
            ref={targetRef2}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            VIOLIN & VIOLA
          </h4>
          <p
            className={`leading-8 py-2 lg:pr-4 font-extralight text-center lg:text-right font-mont ${
              isInView2 ? "transform-none" : "translate-x-[-150%]"
            } ${isInView2 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef2}
            style={{
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Venezuelan-American violinist and violist Paul Aguilar joined the
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
        <div
          className={`m-8 bg-[url('/images/members/PaulPhoto3.webp')] bg-no-repeat bg-cover md:bg-center rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto h-[350px]  ${
            isInView2 ? "transform-none" : "translate-x-[150%]"
          } ${isInView2 ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef2}
          style={{
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.39s",
          }}
        ></div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef4}
      >
        <div
          className={`m-8 bg-[url('/images/members/SkerikCrop.jpg')] bg-no-repeat bg-cover bg-center rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
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
            JOSEPH SKERIK
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
            VIOLA
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
            Since 2023, Joseph Skerik has served as violist of the Vega String
            Quartet, in residence at the Emory Chamber Music Society of Atlanta
            and Emory University. Quartet activities include recording for PBS
            and collaborating with the Juilliard Quartet, Zuill Bailey, Jon
            Kimura Parker, Mark O’Connor, Ettore Causa and Amy Moretti, with
            appearances at Zankel Hall at Carnegie Hall, The National Gallery in
            Washington D.C. and venues in Charlotte, Raleigh, Mexico, Atlanta,
            New York, Memphis, Maine, Washington, Texas and Alaska. Joseph’s
            solo and chamber music accolades include the Yale School of Music’s
            Broadus Erle Prize in Chamber Music, and prizes in the Nedbal Viola
            Competition in Prague, American Viola Society Competition in Los
            Angeles and National YoungArts. Joseph also appears on series and
            festivals such as the Highlands-Cashiers Festival, Newport
            Classical, Classical Music Chicago, Montecito Music Festival,
            Tallgrass Chamber Music Festival, Methow Valley Festival, Vivace
            Festival and the Lake George Festival. He has also appeared on
            numerous tours for the Heifetz Institute as a soloist chamber
            musician. Committed to presenting chamber music in his home state,
            Joseph serves as co-artistic director of Viridian Strings, a chamber
            series in Northern Michigan.
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
            LAURA USISKIN
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
            CELLO
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
          className="fade-in-right m-8 bg-[url('/images/members/UsiskinPhoto5.jpg')] bg-no-repeat bg-center bg-cover rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px]"
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
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col-reverse"
        ref={targetRef5}
      >
        <div
          className="fade-in-right m-8 bg-[url('/images/members/WuPhoto1.jpg')] bg-no-repeat bg-cover rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] bg-center h-[350px]"
          ref={targetRef5}
          style={{
            transform: isInView5 ? "none" : "translateX(-150%)",
            opacity: isInView5 ? 1 : 0,
            transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
          }}
        ></div>
        <div className="md:p-4 p-2">
          <h2
            className={`md:text-5xl text-4xl py-4 text-center font-dream`}
            ref={targetRef5}
            style={{
              transform: isInView5 ? "none" : "translateX(150%)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.09s",
            }}
          >
            CHRISTINE WU
          </h2>
          <h4
            className={`md:text-2xl text-xl font-light text-center font-mont`}
            ref={targetRef5}
            style={{
              transform: isInView5 ? "none" : "translateX(150%)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.24s",
            }}
          >
            VIOLIN & VIOLA
          </h4>
          <p
            className={`font-mont py-2 lg:pl-4 text-center lg:text-left leading-8 font-extralight`}
            ref={targetRef5}
            style={{
              transform: isInView5 ? "none" : "translateX(150%)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1) .39s",
            }}
          >
            Violinist-violist hybrid Christine Wu has been hailed for her
            “strikingly bold sound” and “technical facility” (Theater Jones),
            and performs internationally with recent solo appearances in
            Chicago, Sendai, New York City, and Berlin. Her live premiere of
            Jeffrey Mumford’s verdant cycles of deepening spring with the
            Chicago Composers Orchestra debuted on Jeffrey Mumford: Echoing
            Depths with Albany Records in 2023. She has also been named a
            recipient of an Audience Prize at the 8th Sendai International Music
            Competition, the CD Recording Prize with Outhere Music at the
            inaugural Berlin Prize for Young Artists competition, as well as the
            winner of the Cleveland Institute of Music Concerto Competition,
            Lynn Harrell Concerto Competition, and at the Aspen Music Festival
            and School’s Low Strings Concerto Competition as a violist.
            Christine studied at the Manhattan School of Music, The Juilliard
            School and Cleveland Institute of Music with Sylvia Rosenberg,
            Nicholas Mann, Masao Kawasaki, and Jaime Laredo. She also holds a
            minor in Business Management from Case Western Reserve University.
          </p>
        </div>
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
            pianist, and pedagogue. At Juilliard, she received a full
            scholarship as a resident in the prestigious C. V. Starr Fellowship
            in the Doctoral program. Dr. Dunbar received a Masters of Music in
            Harpsichord Performance at Juilliard and a Bachelor of Music in
            Piano from Manhattan School of Music. Solo performances with
            orchestra include with Orchestra 54, Dorian Baroque Orchestra, The
            Memphis Chamber Music Society, The Symphony of Westchester, and The
            Chamber Orchestra of New York. Dr. Dunbar performed with The Dryden
            Ensemble, the Foundlings Ensemble, The New York Philharmonic, and
            the Atlanta Baroque Orchestra. Dr. Dunbar is on the music faculty at
            the University of North Georgia, Interlochen Arts Camp, and
            maintains a private teaching studio and busy performance calendar.
            Currently, she serves as organist at Madison First United Methodist
            Church in Athens, Georgia and is co-artistic director for Amethyst
            Baroque Ensemble.
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
            Pianist Caroline Owen has played in venues across the U.S., Canada,
            and Europe, including the DiMenna Center for Classical Music (New
            York) and the Wiener Saal and Solitär at the Mozarteum (Salzburg).
            Owen was the winner of the Florida MTNA Young Artist Competition and
            a semifinalist in both the 14th International Mozart Competition
            Salzburg and International Keyboard Odyssiad. She also won the 2018
            Pro-Mozart Society of Atlanta Competition, from which she received a
            scholarship to study at the Salzburg Mozarteum. Owen has performed
            at festivals including PianoFest in the Hamptons, PianoTexas,
            Atlantic Music Festival, and the Prague Piano Festival, and she has
            worked with artists including Jean-Efflam Bavouzet, Richard Goode,
            and Ursula Oppens. Owen is committed to promoting new music. She
            performed as soloist with the Orlando Contemporary Chamber Orchestra
            in 2021 and 2023, and her dance background has fostered unique
            multidisciplinary collaborations with composer Badie Khaleghian.
            Owen earned her Doctorate of Music in piano performance from Florida
            State University. She resides in Atlanta, where she holds positions
            at the University of Georgia and Emory University and serves as
            Co-Director of the Decatur Fine Arts Academy. For more information,
            visit{" "}
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
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef10}
      >
        <div
          className={`m-8 bg-[url('/images/members/TanPhoto1.png')] bg-no-repeat bg-cover bg-center rounded-xl shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
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
            LI SHAN TAN
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
            HARP
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
            Singaporean harpist Li Shan Tan enjoys a multifaceted career as a
            performer, arranger and writer. As the winner of the VI Mexico
            International Harp Competition, she made her debut with the Orquesta
            Sinfónica Nacional at Mexico City’s Palacio de Bellas Artes. Most
            recently, Li Shan appeared as a soloist alongside cellist Yo-Yo Ma
            with the Boston Symphony Orchestra at the 2024 Tanglewood Music
            Festival. In 2022, she performed two sold-out opening night concerts
            with Vista Philharmonic Orchestra. She has also shared the stage
            with groups such as The Metropolitan Opera, the Boston Pops and The
            Beach Boys. As a founding member and resident arranger of
            Singapore’s premier harp quartet The Harp Quarterly, Li Shan aims to
            push the boundaries of her instrument and her music videos ranging
            from Metallica to Debussy have garnered millions of views online. Li
            Shan is also a freelance writer for the international harp magazine,
            HarpColumn. She is currently pursuing her Doctor of Musical Arts at
            the New England Conservatory with BSO Harpist Jessica Zhou, where
            she is the first harpist admitted to the doctoral program.
          </p>
        </div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />

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
    </div>
  );
}

export default Bios;
