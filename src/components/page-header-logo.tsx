import Link from "next/link";

export default function PageHeaderLogo() {
  return (
    <Link
      href="/"
      id="headerLogo"
      aria-label="Home"
      className="group flex min-w-0 cursor-pointer flex-col rounded-xl px-2 py-1 text-white focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-yellow-400"
    >
      <span className="truncate font-gill-sans text-2xl font-bold leading-none sm:text-3xl">
        Military Collegiate School
      </span>
      <span className="mt-1 truncate font-montserrat-light text-[0.68rem] uppercase tracking-[0.32em] text-white/70 sm:text-[0.72rem]">
        Khulna Campus
      </span>
    </Link>
  );
}
