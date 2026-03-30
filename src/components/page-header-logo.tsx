import Link from "next/link";

export default function PageHeaderLogo() {
  return (
    <Link
      href="/"
      id="headerLogo"
      aria-label="Home"
      className="group mr-12 flex cursor-pointer items-center justify-center rounded-md p-2 font-gill-sans text-4xl font-bold text-white focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-yellow-400"
    >
      Military Collegiate School - Khulna
    </Link>
  );
}
