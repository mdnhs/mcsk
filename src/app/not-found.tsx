import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center px-8 py-20">
      <h1 className="mb-4 font-gillSans text-6xl text-white">404</h1>
      <h2 className="mb-8 text-2xl text-neutral-300">Page Not Found</h2>
      <Link
        href="/"
        className="ui-button bg-baltimorePurple  text-white hover:bg-baltimorePurple600 focus-visible:ring-yellow-300 focus-visible:ring-offset-8 focus-visible:ring-offset-neutral-950 active:bg-baltimorePurple700"
      >
        Go back home
      </Link>
    </div>
  );
}
