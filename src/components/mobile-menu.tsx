"use client";

import { Dialog } from "@base-ui/react/dialog";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button-variants";
import { Separator } from "@/components/ui/separator";

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
    <Dialog.Root>
      <Dialog.Trigger
          aria-label="Open mobile menu"
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
            className:
              "mr-2 text-white hover:bg-white/10 hover:text-yellow-300 lg:hidden",
          })}
      >
          <Menu className="size-6" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity data-[ending-style]:opacity-0 lg:hidden" />
        <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col gap-6 border-l border-white/10 bg-baltimorePurple/95 p-6 text-white shadow-2xl backdrop-blur-xl transition-transform duration-200 data-[ending-style]:translate-x-full lg:hidden">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2 text-left">
              <Dialog.Title className="font-gill-sans text-3xl text-white">
                Navigation
              </Dialog.Title>
              <Dialog.Description className="text-sm leading-6 text-white/75">
            Move through the main sections of the site.
              </Dialog.Description>
            </div>
            <Dialog.Close
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "text-white hover:bg-white/10 hover:text-yellow-300",
              })}
            >
              <X className="size-5" />
            </Dialog.Close>
          </div>
          <Separator className="bg-white/10" />
          {navLinks.length ? (
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => {
                const isActive = item.path === pathname;
                return (
                  <li key={item.id}>
                    <Dialog.Close
                      nativeButton={false}
                      render={
                        <Link
                          href={item.path}
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
                    </Dialog.Close>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
