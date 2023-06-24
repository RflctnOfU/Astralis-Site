"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X, Menu } from "lucide-react";
function Nav() {
  const pathname = usePathname();
  const linkData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Calendar",
      path: "/calendar",
    },
    {
      name: "Photos",
      path: "/photos",
    },
    {
      name: "Audio",
      path: "/audio",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 72) {
      setScrolled(true);
    } else setScrolled(false);
  };
  window.addEventListener("scroll", handleScroll);

  const [mobile, setMobile] = useState(false);
  const toggleMobile = () => {
    setMobile((prev) => !prev);
  };
  // const menuOpen = () => {
  //   const menu = document.getElementById("menu");

  //   menu?.classList.remove("translate-x-[100]");
  //   menu?.classList.add("translate-x-[0]");
  // };
  // const menuClose = () => {
  //   const menu = document.getElementById("menu");
  //   menu?.classList.remove("translate-x-[0]");
  //   menu?.classList.add("translate-x-[100]");
  // };
  return (
    <>
      <nav
        className={`${
          scrolled ? "scrolled" : "unscrolled"
        } md:h-[72px] flex justify-between  p-4 items-center w-full fixed z-[2]`}
      >
        <Image
          className="pl-4"
          height={64}
          width={200}
          alt="Astralis Logo"
          src={"/images/homepage/AstralisLogo.webp"}
        />
        <div className="hidden md:pr-4 md:flex">
          {linkData.map((item) => {
            return (
              <div
                key={item.name}
                className="h-full flex items-center justify-end"
              >
                <Link
                  className={`${
                    pathname === item.path ? "active links" : "links"
                  } ${scrolled ? "scrolled" : ""}`}
                  href={item.path}
                >
                  {item.name}
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
        }  bg-[hsl(289,49%,28%)] pt-10 z-10 transition duration-500 ease-in-out`}
      >
        {linkData.map((item) => {
          return (
            <div key={item.name} className="flex items-center justify-start">
              <Link
                className="menu-links"
                href={item.path}
                onClick={toggleMobile}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Nav;
