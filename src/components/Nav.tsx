"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { linkData } from "@/app/lib/data";

// redo burger and mobile menu

function Nav({}) {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  if (typeof window !== "undefined") {
    const handleScroll = () => {
      if (window.scrollY >= 72) {
        setScrolled(true);
      } else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
  }

  const [mobile, setMobile] = useState(false);
  const toggleMobile = () => {
    setMobile((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`${
          scrolled ? "scrolled" : "unscrolled"
        } md:h-[72px] flex justify-between  p-4 items-center w-full fixed z-[20]`}
      >
        <Image
          className="pl-4"
          height={64}
          width={200}
          alt="Astralis Logo"
          src={"/images/experiment/AstralisLogo.webp"}
        />
        <div className="hidden md:pr-4 md:flex">
          {linkData.map((item) => {
            return (
              <div
                key={item.name}
                className="h-full flex items-center justify-end font-mont"
              >
                <Link
                  prefetch
                  className={`${
                    pathname === item.path ? "active links" : "links"
                  } `}
                  href={item.path}
                >
                  {item.name.toUpperCase()}
                </Link>
              </div>
            );
          })}
        </div>
        <button className="md:hidden" onClick={toggleMobile}>
          {mobile ? <X /> : <Menu />}
        </button>
      </nav>
      <div
        id="menu"
        className={`${
          mobile ? "open" : "closed"
        }  bg-[hsl(289,49%,28%)] pt-16 z-10 transition duration-500 ease-in-out sm:hidden`}
      >
        {linkData.map((item) => {
          return (
            <div
              key={item.name}
              className="flex items-center justify-start font-mont"
            >
              <Link
                className="menu-links"
                href={item.path}
                onClick={toggleMobile}
              >
                {item.name.toUpperCase()}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Nav;
