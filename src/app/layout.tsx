import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
// import { useState } from "react";
import "./globals.css";
import { Lato } from "next/font/google";
const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "100", "900"],
  subsets: ["latin"],
});
console.log(lato.variable);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} bg-[url("/images/experiment/background.png")] min-h-screen bg-fixed`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
