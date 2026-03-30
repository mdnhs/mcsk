"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  id: number;
  text: string;
  path: string;
};

interface MobileMenuProps {
  navLinks: NavItem[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <button
        aria-label="Open mobile menu"
        onClick={openMobileMenu}
        className="mr-2 flex h-11 w-11 items-center justify-center rounded-md text-white hover:text-yellow-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300 active:text-yellow-500 lg:hidden"
      >
        <Bars3Icon className="h-full w-full" />
      </button>

      <Dialog open={isOpen} onClose={closeMobileMenu} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-55 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-[30%]">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-300 ease-in-out data-[closed]:translate-x-full"
              >
                <div className="flex h-full flex-col overflow-y-scroll border-l border-solid border-white bg-baltimorePurple/80 shadow-xl backdrop-blur-lg">
                  <div className="flex h-20 items-center px-4">
                    <div className="flex w-full justify-end">
                      <DialogTitle className="sr-only">
                        Navigation Menu
                      </DialogTitle>
                      <div className="ml-3 flex items-center">
                        <button
                          type="button"
                          onClick={() => closeMobileMenu()}
                          className="mr-2 flex h-11 w-11 items-center justify-center rounded-md text-white hover:text-yellow-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300 active:text-yellow-500"
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon
                            aria-hidden="true"
                            className="h-full w-full"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex flex-1 flex-col items-center py-6">
                    {navLinks.length ? (
                      <ul className="flex flex-col">
                        {navLinks.map((item) => {
                          const isActive = item.path === pathname;
                          return (
                            <li className="mb-4 max-w-fit" key={item.id}>
                              <Link
                                href={item.path}
                                onClick={() => closeMobileMenu()}
                                className={`flex items-center justify-center rounded-lg px-3 py-2 text-3xl ${
                                  isActive ? "text-yellow-400" : "text-white"
                                } hover:text-yellow-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300 active:text-yellow-500`}
                              >
                                {item.text}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
