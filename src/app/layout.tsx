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
    <html lang="en">
      <body
        className={` min-h-screen bg-fixed w-screen overflow-x-hidden scroll-smooth text-white`}
      >
        <div
          className={`bg-[url("/images/experiment/background.png")] bg-no-repeat bg-center h-screen w-screen fixed -z-10`}
        ></div>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
