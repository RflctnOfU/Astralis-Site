import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "./globals.css";
import { Lato, Ysabeau } from "next/font/google";
const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "100", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="relative w-full overflow-x-hidden max-w-[1600px]"
    >
      <body
        className={` min-h-screen bg-fixed overflow-x-hidden scroll-smooth text-white relative `}
      >
        <div
          className={`bg-[url("/images/experiment/background.png")] bg-no-repeat bg-center h-screen w-full fixed -z-10`}
        ></div>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
