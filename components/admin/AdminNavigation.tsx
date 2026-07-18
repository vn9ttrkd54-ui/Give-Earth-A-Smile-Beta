"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminNavigationItem = {
  label: string;
  href: string;
  available: boolean;
};

const navigationItems: AdminNavigationItem[] = [
  {
    label: "Overview",
    href: "/admin",
    available: true,
  },
  {
    label: "Projects",
    href: "/admin/projects",
    available: true,
  },
  {
    label: "Ambassadors",
    href: "/admin/ambassadors",
    available: false,
  },
  {
    label: "Education",
    href: "/admin/education",
    available: false,
  },
  {
    label: "Volunteers",
    href: "/admin/volunteers",
    available: false,
  },
];

function isNavigationItemActive(
  pathname: string,
  href: string,
) {
  if (href === "/admin") {
    return pathname === "/admin";
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}

export default function AdminNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Admin navigation"
      className="border-b border-[#294638] bg-[#FFFAF0]"
    >
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6">
        {navigationItems.map((item) => {
          const active = isNavigationItemActive(
            pathname,
            item.href,
          );

          if (!item.available) {
            return (
              <span
                key={item.href}
                title="Coming in a future pack"
                className="shrink-0 cursor-not-allowed px-5 py-5 text-sm font-bold text-[#233F31]/35"
              >
                {item.label}
              </span>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 border-b-4 px-5 py-5 text-sm font-bold transition ${
                active
                  ? "border-[#233F31] bg-[#F1F6C8]"
                  : "border-transparent hover:bg-[#F1F6C8]/60"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}