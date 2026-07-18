"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavigationLink = {
  href: string;
  label: string;
};

const navigationLinks: NavigationLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/impact",
    label: "Our Impact",
  },
  {
    href: "/education",
    label: "Education and Outreach",
  },
  {
    href: "/team",
    label: "Our Team",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-t-2 border-[#294638] bg-[#F1F6C8]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Give Earth a Smile homepage"
        >
          <Image
            src="/images/logo.png"
            alt="Give Earth a Smile logo"
            width={72}
            height={72}
            priority
            className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <span className="truncate font-[var(--font-heading)] text-2xl text-[#233F31] sm:text-3xl">
            Give Earth a Smile
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="relative z-[60] flex h-12 w-12 flex-col items-center justify-center gap-[5px] border border-[#294638] text-[#233F31] transition-colors hover:bg-[#233F31] hover:text-white lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[2px] w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigationLinks.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative border border-[#294638] px-4 py-3 text-center text-sm font-semibold transition-all duration-300 xl:px-5 ${
                  active
                    ? "bg-[#233F31] text-white shadow-md"
                    : "bg-transparent text-[#233F31] hover:-translate-y-0.5 hover:bg-[#233F31] hover:text-white hover:shadow-md"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div
        className={`fixed inset-0 top-[89px] z-40 bg-[#F1F6C8] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col overflow-y-auto px-6 py-8">
          {navigationLinks.map((link, index) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b border-[#294638]/30 px-3 py-5 text-2xl font-semibold transition-all duration-300 ${
                  active
                    ? "bg-[#233F31] pl-6 text-white"
                    : "text-[#233F31] hover:bg-[#233F31] hover:pl-6 hover:text-white"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/join"
            className="mt-8 bg-[#B7CA7F] px-8 py-4 text-center text-lg font-bold text-[#233F31]"
          >
            Join Our Organization
          </Link>
        </nav>
      </div>
    </header>
  );
}