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
  // const router = useRouter();
  const pathname = usePathname();
  // const activeStyle = {
  //   background-size: "100% 100%";
  // }
  return (
    <>
      <header className='align-middle p-12 h-[580px] bg-[url("../../public/4.png")] bg-cover bg-no-repeat bg-transparent bg-center '></header>
      <nav className="h-[72px] bg-[hsl(289,49%,28%)] flex justify-end items-center pr-48">
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
