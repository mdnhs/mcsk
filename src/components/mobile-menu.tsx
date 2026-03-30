"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button-variants";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = {
  id: number;
  text: string;
  path: string;
};

interface MobileMenuProps {
  navLinks: NavItem[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open mobile menu"
        className={buttonVariants({
          variant: "ghost",
          size: "icon",
          className:
            "mr-2 text-white hover:bg-white/10 hover:text-yellow-300 lg:hidden",
        })}
      >
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="lg:hidden">
        <div className="flex items-start justify-between gap-4">
          <SheetHeader>
            <SheetTitle className="font-gill-sans text-3xl text-white">
              Navigation
            </SheetTitle>
            <SheetDescription className="text-sm leading-6 text-white/75">
              Move through the main sections of the site.
            </SheetDescription>
          </SheetHeader>
          <SheetClose
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "text-white hover:bg-white/10 hover:text-yellow-300",
            })}
          >
            <span className="sr-only">Close mobile menu</span>
          </SheetClose>
        </div>
        <Separator className="bg-white/10" />
        {navLinks.length ? (
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => {
              const isActive = item.path === pathname;
              return (
                <li key={item.id}>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <Link
                        href={item.path}
                        aria-current={isActive ? "page" : undefined}
                        target={
                          item.path.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.path.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={buttonVariants({
                          variant: isActive ? "secondary" : "ghost",
                          className: isActive
                            ? "w-full justify-start bg-baltimoreGold text-left text-black hover:bg-baltimoreGold/90"
                            : "w-full justify-start text-left text-white hover:bg-white/10 hover:text-yellow-300",
                        })}
                      />
                    }
                  >
                    {item.text}
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
