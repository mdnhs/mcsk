import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";

export default function NotFound() {
  return (
    <div className="flex w-full grow flex-col items-center justify-center px-8 py-20">
      <h1 className="mb-4 font-gill-sans text-6xl text-white">404</h1>
      <h2 className="mb-8 text-2xl text-neutral-300">Page Not Found</h2>
      <Link
        href="/"
        className={buttonVariants({
          size: "lg",
          className: "bg-baltimorePurple text-white hover:bg-baltimorePurple600",
        })}
      >
        Go back home
      </Link>
    </div>
  );
}
