import type { Metadata, Viewport } from "next";
import {
  DM_Serif_Display,
  Fraunces,
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

const frauncesFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
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

  icons: {
    icon: [
      {
        url: "/images/earth-icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/earth-icon.png",
    apple: "/images/earth-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${frauncesFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
