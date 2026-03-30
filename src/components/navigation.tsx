import { Suspense } from "react";
import Link from "next/link";
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
    path: "https://baltimore-corgis-shop.fourthwall.com",
  },
];

export default async function Navigation() {
  return (
    <nav>
      {headerNavLinks.length ? (
        <ul className="hidden lg:flex">
          {headerNavLinks.map((navLink) => (
            <li key={navLink.id} className="ml-4">
              <Link
                href={navLink.path}
                className="flex items-center justify-center rounded-md px-3 py-1 font-montserratLight text-base font-semibold text-white hover:text-yellow-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300 active:text-baltimoreGold"
              >
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="lg:hidden">
        <Suspense>
          <MobileMenu navLinks={headerNavLinks} />
        </Suspense>
      </div>
    </nav>
  );
}
