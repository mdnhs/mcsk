"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/mobile-menu";
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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

function isActiveNavItem(pathname: string, navPath: string) {
  if (navPath.startsWith("http")) {
    return false;
  }

  if (navPath === "/") {
    return pathname === "/";
  }

  return pathname === navPath || pathname.startsWith(`${navPath}/`);
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div>
      {headerNavLinks.length ? (
        <Card className="hidden rounded-full border-white/15 bg-white/6 p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.2)] lg:block">
          <NavigationMenu aria-label="Primary">
            <NavigationMenuList>
            {headerNavLinks.map((navLink) => {
              const isActive = isActiveNavItem(pathname, navLink.path);

              return (
                <NavigationMenuItem key={navLink.id}>
                  <NavigationMenuLink
                    active={isActive}
                    render={
                      <Link
                        href={navLink.path}
                        aria-current={isActive ? "page" : undefined}
                        target={
                          navLink.path.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          navLink.path.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      />
                    }
                    className={
                      isActive
                        ? "bg-baltimoreGold text-black shadow-[inset_0_-1px_0_rgba(255,255,255,0.25)] hover:bg-baltimoreGold/90"
                        : "text-white hover:bg-white/10 hover:text-yellow-300"
                    }
                  >
                    {navLink.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
            </NavigationMenuList>
          </NavigationMenu>
        </Card>
      ) : null}
      <div className="lg:hidden">
        <MobileMenu navLinks={headerNavLinks} />
      </div>
    </div>
  );
}
