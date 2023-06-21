import { Mail, Facebook, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <div>
              <a href="mailto:astralisensemble@gmail.com" target="_blank">
                <Mail size={35} />
              </a>
              <a
                href="https://www.facebook.com/astralisensemble/"
                target="_blank"
              >
                <Facebook size={35} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCKcTXindgAiNh-uyAncfQEw"
                target="_blank"
              >
                <Youtube size={35} />
              </a>
              <a
                href="https://www.instagram.com/astralisensemble/"
                target="_blank"
              >
                <Instagram size={35} />
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
