import Link from "next/link";

export default function PageHeaderLogo() {
  return (
    <Link
      href="/"
      id="headerLogo"
      aria-label="Home"
      className="group mr-12 flex cursor-pointer items-center justify-center rounded-md p-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-400 font-gillSans text-white text-4xl font-bold"
    >
      Military Collegiate School - Khulna
    </Link>
  );
}
