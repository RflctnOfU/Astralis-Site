"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  return (
    <nav
      className={`${
        scrolled ? "scrolled" : "unscrolled"
      } hidden md:h-[72px] md:flex md:justify-around items-center w-full fixed z-[2]`}
    >
      <Image
        height={64}
        width={200}
        alt="Astralis Logo"
        src={"/images/homepage/AstralisLogo.webp"}
      />
      <div className="flex">
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
    </nav>
  );
}

export default Nav;
