"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

function HeaderNav() {
  const pathname = usePathname();

  return (
    <>
      <header className='align-middle p-12 h-[290px] md:h-[435px] lg:h-[580px] bg-[url("../../public/images/homepage/4.png")] bg-cover bg-no-repeat bg-transparent bg-center '></header>
      <nav className="hidden md:h-[72px] bg-[hsl(289,49%,28%)] md:flex md:justify-center items-center">
        {linkData.map((item) => {
          return (
            <div
              key={item.name}
              className="h-full flex items-center justify-end"
            >
              <Link
                className={pathname === item.path ? "active links" : "links"}
                href={item.path}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </nav>
    </>
  );
}

export default HeaderNav;
