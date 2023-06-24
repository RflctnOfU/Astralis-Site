import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
// import { useState } from "react";
import "./globals.css";
import { Lato, Ysabeau } from "next/font/google";
const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "100", "900"],
  subsets: ["latin"],
});
const ysabeau = Ysabeau({
  variable: "--font-ysabeau",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  subsets: ["latin", "latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} ${ysabeau.variable} bg-[url("/images/experiment/background.png")] min-h-screen bg-fixed overflow-x-hidden`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
