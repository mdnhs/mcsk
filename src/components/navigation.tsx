"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/mobile-menu";

export type NavItem = {
  id: number;
  text: string;
  path: string;
};

const headerNavLinks: NavItem[] = [
  {
    id: 1,
    text: "home",
    path: "/",
  },
  {
    id: 2,
    text: "events",
    path: "/events",
  },
  {
    id: 3,
    text: "tickets",
    path: "/tickets",
  },
  {
    id: 4,
    text: "merch",
    path: "https://Military Collegiate School - Khulna-shop.fourthwall.com",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      {headerNavLinks.length ? (
        <ul className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/6 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur lg:flex">
          {headerNavLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link
                href={navLink.path}
                target={navLink.path.startsWith("http") ? "_blank" : undefined}
                rel={
                  navLink.path.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`flex items-center justify-center rounded-full px-4 py-2 font-montserrat-light text-sm font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-yellow-300 ${
                  pathname === navLink.path
                    ? "bg-baltimoreGold text-black"
                    : "text-white hover:bg-white/10 hover:text-yellow-300 active:text-baltimoreGold"
                }`}
              >
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="lg:hidden">
        <MobileMenu navLinks={headerNavLinks} />
      </div>
    </nav>
  );
}
