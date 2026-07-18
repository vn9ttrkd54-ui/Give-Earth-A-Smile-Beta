import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Montserrat,
  Roboto_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headingFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

const monoFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Give Earth a Smile",
  description:
    "A youth-led environmental organization connecting communities around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}