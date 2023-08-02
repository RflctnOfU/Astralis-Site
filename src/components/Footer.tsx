import { Mail, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-transparent w-full border-t-[1px]">
      <div className="">
        <div className="">
          <div className="flex flex-col items-center py-10 text-">
            <div className="flex space-x-16 pb-[10px] mb-4">
              <Link
                href="mailto:astralisensemble@gmail.com"
                target="_blank"
                className="hover:scale-105 transistion duration-300 ease-in-out hover:text-[hsl(287,20%,60%)] text-white"
              >
                <Mail size={35} />
              </Link>
              <Link
                href="https://www.facebook.com/astralisensemble/"
                target="_blank"
                className="hover:scale-105 transistion duration-300 ease-in-out hover:text-[hsl(287,20%,60%)] text-white"
              >
                <Facebook size={35} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCKcTXindgAiNh-uyAncfQEw"
                target="_blank"
                className="hover:scale-105 transistion duration-300 ease-in-out hover:text-[hsl(287,20%,60%)] text-white"
              >
                <Youtube size={35} />
              </Link>
              <Link
                href="https://www.instagram.com/astralisensemble/"
                target="_blank"
                className="hover:scale-105 transistion duration-300 ease-in-out hover:text-[hsl(287,20%,60%)] text-white"
              >
                <Instagram size={35} />
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around text-white w-full">
              <div>
                <Link
                  href="mailto:astralisensemble@gmail.com"
                  className="no-underline font-mont font-extralight"
                >
                  astralisensemble@gmail.com
                </Link>
              </div>
              <div className="lg:pr-14">
                <Link
                  href="tel:7067262667"
                  className="no-underline font-mont font-extralight"
                >
                  706.726.2667
                </Link>
              </div>
              <div>
                <Link
                  href="https://astralisensemble.com"
                  target="_blank"
                  className="no-underline font-mont font-extralight"
                >
                  astralisensemble.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
