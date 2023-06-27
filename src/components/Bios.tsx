"use client";
import { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";

function Bios() {
  const targetRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef, { once: true });
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

  return (
    <div className="w-[90%] mb-8 bg-[#d5d5d5] bg-opacity-20 rounded-xl">
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef}
      >
        <div
          className={`m-8 bg-[url('/images/members/angela4.webp')] bg-no-repeat bg-cover bg-center rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
            isInView ? "transform-none" : "translate-x-[-150%]"
          } ${isInView ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef}
          style={{
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        ></div>
        <div className="p-4">
          <h2
            className={`text-4xl text-center ${
              isInView ? "transform-none" : "translate-x-[150%]"
            } ${isInView ? "opacity-100" : "opacity-0"} `}
            ref={targetRef}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            Angela Massey
          </h2>
          <h4
            className={`text-2xl font-light text-center ${
              isInView ? "transform-none" : "translate-x-[150%]"
            } ${isInView ? "opacity-100" : "opacity-0"}`}
            ref={targetRef}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s",
            }}
          >
            Flute
          </h4>
          <p
            className={`leading-8 font-extralight text-center ${
              isInView ? "transform-none" : "translate-x-[150%]"
            } ${isInView ? "opacity-100" : "opacity-0"} `}
            ref={targetRef}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
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
      </div>
      <hr className="lg:hidden mx-4" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col-reverse"
        ref={targetRef1}
      >
        <div className=" p-4">
          <h2
            className="text-4xl text-center"
            ref={targetRef1}
            style={{
              transform: isInView1 ? "none" : "translateX(-150%)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            Kris Marshall
          </h2>
          <h4
            className="text-2xl font-light text-center "
            ref={targetRef1}
            style={{
              transform: isInView1 ? "none" : "translateX(-150%)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s",
            }}
          >
            Trumpet
          </h4>
          <p
            className="leading-8 font-extralight"
            ref={targetRef1}
            style={{
              transform: isInView1 ? "none" : "translateX(-150%)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
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
            Orchestra. Other significant instructors include Robert Smith,
            principal trumpet with The Florida Orchestra, and Ed Cord, former
            principal trumpet with the Israel Philharmonic and Utah Symphony.
            Marshall pursued degrees in trumpet performance at Florida State
            University, Indiana University, and the University of South Florida.
          </p>
        </div>

        <div
          className="fade-in-right m-8 bg-[url('/images/members/kris.webp')] bg-no-repeat bg-cover rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] md:bg-center h-[350px]"
          ref={targetRef1}
          style={{
            transform: isInView1 ? "none" : "translateX(150%)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
        ></div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef2}
      >
        <div
          className={`m-8 bg-[url('/images/members/megan.webp')] bg-no-repeat bg-cover bg-center rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
            isInView2 ? "transform-none" : "translate-x-[-150%]"
          } ${isInView2 ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef2}
          style={{
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        ></div>
        <div className="p-4">
          <h2
            className={`text-4xl text-center ${
              isInView2 ? "transform-none" : "translate-x-[150%]"
            } ${isInView2 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef2}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            Megan Chartier
          </h2>
          <h4
            className={`text-2xl font-light text-center ${
              isInView2 ? "transform-none" : "translate-x-[150%]"
            } ${isInView2 ? "opacity-100" : "opacity-0"}`}
            ref={targetRef2}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s",
            }}
          >
            Cello
          </h4>
          <p
            className={`leading-8 font-extralight text-center ${
              isInView2 ? "transform-none" : "translate-x-[150%]"
            } ${isInView2 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef2}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
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
              href={"https://www.meganchartier.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.meganchartier.com
            </Link>
            .
          </p>
        </div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col-reverse"
        ref={targetRef3}
      >
        <div className=" p-4">
          <h2
            className="text-4xl text-center"
            ref={targetRef3}
            style={{
              transform: isInView3 ? "none" : "translateX(-150%)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            Paul Aguilar
          </h2>
          <h4
            className="text-2xl font-light text-center "
            ref={targetRef3}
            style={{
              transform: isInView3 ? "none" : "translateX(-150%)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s",
            }}
          >
            Violin
          </h4>
          <p
            className="leading-8 font-extralight"
            ref={targetRef3}
            style={{
              transform: isInView3 ? "none" : "translateX(-150%)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            As founding 1st violinist of the Callisto Quartet, Paul Aguilar won
            top prizes at Banff, Bordeaux, Fischoff, Melbourne, Wigmore Hall,
            and Manhattan International Competitions. Recent performances
            include appearances on Schneider Concert Series, Dame Myra Hess
            Concerts, Music Institute of Chicago Artist Series, Ravinia
            Festival, ChamberFest Cleveland, La Jolla Summerfest, Heidelberg
            String Quartet Festival, and the Emilia-Romagna Festival. He is also
            performing with Orpheus Chamber Orchestra for the 2022-2023 season.
            Formerly, he was a member of Rice University’s Graduate String
            Quartet in Residence and also studied at the Escuela Superior de
            Música Reina Sofia School in Madrid, Spain with Gunter Pichler. He
            previously earned his Bachelor’s Degree in Violin Performance from
            the Cleveland Institute of Music where he was a full-scholarship
            student of Jaime Laredo and Jan Sloman. Hailing from a
            Venezuelan-American family in South Carolina, he began studying
            violin at age five with his older sister as his primary teacher. In
            addition to traveling around the world performing, Paul enjoys
            sharing music alongside his wife Rachel, at their church and
            throughout their community in schools and numerous other community
            centers. Paul is a 2019 MPower Grant recipient from the Sphinx
            Organization.
          </p>
        </div>

        <div
          className="fade-in-right m-8 bg-[url('/images/members/Paul.jpeg')] bg-no-repeat bg-cover rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px]"
          ref={targetRef3}
          style={{
            transform: isInView3 ? "none" : "translateX(150%)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
        ></div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef4}
      >
        <div
          className={`m-8 bg-[url('/images/members/rachel.webp')] bg-no-repeat bg-cover bg-center rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
            isInView4 ? "transform-none" : "translate-x-[-150%]"
          } ${isInView4 ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef4}
          style={{
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        ></div>
        <div className="p-4">
          <h2
            className={`text-4xl text-center ${
              isInView4 ? "transform-none" : "translate-x-[150%]"
            } ${isInView4 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef4}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            Rachel O&apos;Brien
          </h2>
          <h4
            className={`text-2xl font-light text-center ${
              isInView4 ? "transform-none" : "translate-x-[150%]"
            } ${isInView4 ? "opacity-100" : "opacity-0"}`}
            ref={targetRef4}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s",
            }}
          >
            Harp
          </h4>
          <p
            className={`leading-8 font-extralight text-center ${
              isInView4 ? "transform-none" : "translate-x-[150%]"
            } ${isInView4 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef4}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            The 2019 Gold Medal winner of the Houston Symphony’s Ima Hogg
            Competition, Rachel O’Brien has appeared in Philadelphia’s Kimmel
            Center for the Performing Arts, Houston’s E. Jones Hall for the
            Performing Arts, Cleveland’s Severance Hall, and Blossom Music
            Center. A winner of Astral Artists’ 2017 National Auditions, O’Brien
            received top prizes from such competitions as the Lyon & Healy
            Awards, the Cleveland Institute of Music (CIM) Concerto Competition,
            and the Saratoga Harp Colony “Play with the Pros” Competition. She
            is also the recipient of the Alice Chalifoux Award and was the 2015
            CIM Presser Scholar. O’Brien has appeared as soloist with the
            Houston Symphony Orchestra, members of The Philadelphia Orchestra,
            the National Repertory Orchestra, and the CIM Symphony Orchestra.
            Passionate about inspiring musicians around the world, O’Brien
            maintains a significant social media following, with around 50,000
            followers on Instagram. She is the author of “Purpose in Practice:
            26 Rules for the Practicing Musician,” a book designed to motivate
            musicians to achieve higher practicing goals. O’Brien teaches
            privately and also serves on faculty at Hollins University in
            Roanoke, Virginia. Rachel O’Brien holds Bachelor and Master of Music
            degrees from the Cleveland Institute of Music, where she studied
            harp performance under Yolanda Kondonassis. For more information,
            visit{" "}
            <Link
              href={"www.rachelleehall.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.rachelleehall.com
            </Link>
            .
          </p>
        </div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col-reverse"
        ref={targetRef5}
      >
        <div className=" p-4">
          <h2
            className="text-4xl text-center"
            ref={targetRef5}
            style={{
              transform: isInView5 ? "none" : "translateX(-150%)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            Chee-Hang See
          </h2>
          <h4
            className="text-2xl font-light text-center "
            ref={targetRef5}
            style={{
              transform: isInView5 ? "none" : "translateX(-150%)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s",
            }}
          >
            Piano
          </h4>
          <p
            className="leading-8 font-extralight"
            ref={targetRef5}
            style={{
              transform: isInView5 ? "none" : "translateX(-150%)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            Chee-Hang See is a prize-winning pianist who has been called &quot;a
            cool and confident performer&quot; by the Charleston City Paper. He
            has performed in concert series and festivals such as the Festival
            Internacional de Colonia, Hilton Head Symphony Orchestra Musicale,
            South Carolina Chamber Music Festival, Chicago Duo Piano Festival,
            Hawaii International Cultural Arts Festival, and Piccolo Spoleto
            Festival. He has soloed with the Toa Payoh West Chinese Orchestra in
            Singapore; Bela Bartok Orchestra in Perugia, Italy; Montevideo
            Philharmonic in Uruguay; Charleston Symphony Orchestra; and the
            Cleveland Institute of Music Chamber Orchestra. He plays regularly
            with Charleston Symphony, Chamber Music Charleston, and his duo, Tan
            and See Piano Duo. Chee-Hang is currently on faculty at the
            Charleston Academy of Music and music director of the Midtown
            Theater in North Charleston, where he founded “Midweek at Midtown,”
            a chamber music series. His debut album “Violin Transcriptions,”
            featuring works by Rachmaninoff and Muczynski, was released in 2014.
            He received degrees from the Cleveland Institute of Music, College
            of Charleston, and diplomas from the Royal Schools of Music and
            Trinity College London under the tutelage of Sandra Shapiro, Enrique
            Graf, and Wong Joon Hwang. For more information, visit{" "}
            <Link
              href={"www.cheehang.weebly.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.cheehang.weebly.com
            </Link>
            .
          </p>
        </div>

        <div
          className="fade-in-right m-8 bg-[url('/images/members/see.webp')] bg-no-repeat bg-cover rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] md:bg-center h-[350px]"
          ref={targetRef5}
          style={{
            transform: isInView5 ? "none" : "translateX(150%)",
            opacity: isInView5 ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
        ></div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col"
        ref={targetRef6}
      >
        <div
          className={`m-8 bg-[url('/images/members/owenphoto1.webp')] bg-no-repeat bg-cover bg-center rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] h-[350px] ${
            isInView6 ? "transform-none" : "translate-x-[-150%]"
          } ${isInView6 ? "opacity-100" : "opacity-0"} transition`}
          ref={targetRef6}
          style={{
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        ></div>
        <div className="p-4">
          <h2
            className={`text-4xl text-center ${
              isInView6 ? "transform-none" : "translate-x-[150%]"
            } ${isInView6 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef6}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            Caroline Owen
          </h2>
          <h4
            className={`text-2xl font-light text-center ${
              isInView6 ? "transform-none" : "translate-x-[150%]"
            } ${isInView6 ? "opacity-100" : "opacity-0"}`}
            ref={targetRef6}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s",
            }}
          >
            Piano
          </h4>
          <p
            className={`leading-8 font-extralight text-center ${
              isInView6 ? "transform-none" : "translate-x-[150%]"
            } ${isInView6 ? "opacity-100" : "opacity-0"} `}
            ref={targetRef6}
            style={{
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            A native of Atlanta, GA, pianist Caroline Owen has performed in
            venues across the U.S. and in Austria, Italy, and the Czech
            Republic. She was the winner of the 2019 Florida MTNA Young Artist
            Competition and a semifinalist in the 14th International Mozart
            Competition and 2016 International Keyboard Odyssiad. She also won
            the 2018 Pro-Mozart Society of Atlanta Competition, from which she
            received a scholarship to study at the Mozarteum International
            Summer Academy under Dominique Merlet and Christopher Hinterhuber.
            Owen has participated and performed at festivals including Pianofest
            in the Hamptons, PianoTexas, Atlantic Music Festival, and the Prague
            Piano Festival. She has worked with distinguished artists and
            teachers such as Richard Goode, Yoheved Kaplinsky, Pascal Rogé, and
            Boris Slutsky, among others. Owen is also committed to promoting new
            music, most recently performing at the 2022 FSU Festival of New
            Music and premiering Donald Yu’s Piano Concerto No. 1 with the
            Orlando Contemporary Chamber Orchestra in 2021. Her background in
            dance has also fostered unique multidisciplinary collaborations with
            composer Badie Khaleghian. Owen recently received her Doctorate of
            Music degree in piano performance from Florida State University. For
            more information, visit{" "}
            <Link
              href={"www.carolineowenpiano.com"}
              target="_blank"
              className="text-[hsl(290,25%,73%)]"
            >
              www.carolineowenpiano.com
            </Link>
            .
          </p>
        </div>
      </div>
      <hr className="lg:hidden mx-4 self-center" />
      <div
        className="lg:grid lg:grid-cols-2 gap-4 bg-transparent flex flex-col-reverse"
        ref={targetRef7}
      >
        <div className=" p-4">
          <h2
            className="text-4xl text-center"
            ref={targetRef7}
            style={{
              transform: isInView7 ? "none" : "translateX(-150%)",
              opacity: isInView7 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
            Alexandra Snyder Dunbar
          </h2>
          <h4
            className="text-2xl font-light text-center "
            ref={targetRef7}
            style={{
              transform: isInView7 ? "none" : "translateX(-150%)",
              opacity: isInView7 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.85s",
            }}
          >
            Harpsichord
          </h4>
          <p
            className="leading-8 font-extralight"
            ref={targetRef7}
            style={{
              transform: isInView7 ? "none" : "translateX(-150%)",
              opacity: isInView7 ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
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

        <div
          className="fade-in-right m-8 bg-[url('/images/members/dunbar6ed2.webp')] bg-no-repeat bg-cover rounded-lg shadow-lg shadow-[hsl(290,25%,23%)] lg:h-auto md:h-[450px] md:bg-center h-[350px]"
          ref={targetRef7}
          style={{
            transform: isInView7 ? "none" : "translateX(150%)",
            opacity: isInView7 ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Bios;
