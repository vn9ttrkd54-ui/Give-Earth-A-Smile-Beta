import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F1F6C8] px-6 py-14 text-[#233F31]">
      <div className="mx-auto max-w-6xl text-center">
        <Image
          src="/images/logo.png"
          alt="Give Earth a Smile logo"
          width={300}
          height={50}
          className="mx-auto h-16 w-auto object-contain"
        />

        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/impact">Our Impact</Link>
          <Link href="/education">Education</Link>
          <Link href="/team">Our Team</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <p className="mt-8 text-sm">
          © 2024 Give Earth a Smile. All rights reserved.
        </p>
      </div>
    </footer>
  );
}