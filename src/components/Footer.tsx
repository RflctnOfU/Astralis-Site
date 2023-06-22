import { Mail, Facebook, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-neutral-100 w-full">
      <div className="">
        <div className="">
          <div className="flex flex-col items-center py-10 text-">
            <div className="flex space-x-16 pb-[10px] mb-4">
              <a
                href="mailto:astralisensemble@gmail.com"
                target="_blank"
                className="hover:scale-105 transistion duration-300 ease-in-out hover:text-[hsl(288,49%,25%)] text-[hsl(290,48%,39%)]"
              >
                <Mail size={35} />
              </a>
              <a
                href="https://www.facebook.com/astralisensemble/"
                target="_blank"
                className="hover:scale-105 transistion duration-300 ease-in-out hover:text-[hsl(288,49%,25%)] text-[hsl(290,48%,39%)]"
              >
                <Facebook size={35} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCKcTXindgAiNh-uyAncfQEw"
                target="_blank"
                className="hover:scale-105 transistion duration-300 ease-in-out hover:text-[hsl(288,49%,25%)] text-[hsl(290,48%,39%)]"
              >
                <Youtube size={35} />
              </a>
              <a
                href="https://www.instagram.com/astralisensemble/"
                target="_blank"
                className="hover:scale-105 transistion duration-300 ease-in-out hover:text-[hsl(288,49%,25%)] text-[hsl(290,48%,39%)]"
              >
                <Instagram size={35} />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around text-[hsl(290,48%,28%)] w-full">
              <div>
                <a
                  href="mailto:astralisensemble@gmail.com"
                  className="no-underline font-normal"
                >
                  astralisensemble@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:7067262667" className="no-underline font-normal">
                  706.726.2667
                </a>
              </div>
              <div>
                <a
                  href="https://astralisensemble.com"
                  target="_blank"
                  className="no-underline font-normal"
                >
                  astralisensemble.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
