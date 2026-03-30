import Link from "next/link";

export default function PageFooter() {
  return (
    <footer className="mx-auto flex w-full flex-col items-center justify-center border-t-2 border-solid border-white text-white">
      <div className="flex w-full max-w-pageWidth flex-col-reverse items-center px-4 py-8 lg:flex-row lg:justify-between lg:px-40">
        <div className="mb-6 lg:mb-0">
          <h3 className="mb-4 text-center text-3xl">Contact</h3>
          <a
            href="mailto:baltimorecorgis@gmail.com"
            className="mb-6 block rounded-lg px-4 py-2 text-lg hover:text-yellow-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300 active:text-yellow-400"
          >
            baltimorecorgis@gmail.com
          </a>

          <div className="flex justify-evenly">
            <a
              href="https://www.facebook.com/groups/BaltimoreCorgis"
              className="h-20 w-20 rounded-3xl p-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300"
            >
              <span className="sr-only">
                Visit the Baltimore Corgi&apos;s Facebook Page
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1350 1349.999938"
                className="h-full w-full fill-white hover:fill-yellow-300 active:fill-yellow-400"
              >
                <path
                  d="M 1011.429688 0 L 337.5 0 C 152.144531 0 0 152.144531 0 338.570312 L 0 1012.5 C 0 1197.855469 152.144531 1350 337.5 1350 L 1011.429688 1350 C 1197.855469 1350 1350 1197.855469 1350 1011.429688 L 1350 338.570312 C 1350 152.144531 1197.855469 0 1011.429688 0 Z M 856.070312 675 L 728.570312 675 L 728.570312 1092.855469 L 567.855469 1092.855469 L 567.855469 675 L 482.144531 675 L 482.144531 503.570312 L 557.144531 503.570312 L 557.144531 430.714844 C 557.144531 362.144531 591.429688 253.929688 736.070312 253.929688 L 867.855469 253.929688 L 867.855469 396.429688 L 774.644531 396.429688 C 759.644531 396.429688 739.285156 406.070312 739.285156 439.285156 L 739.285156 503.570312 L 871.070312 503.570312 Z M 856.070312 675 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/baltimorecorgis/"
              className="h-20 w-20 rounded-3xl p-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300"
            >
              <span className="sr-only">
                Visit the Baltimore Corgi&apos;s Instagram Page
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1350 1349.999938"
                className="h-full w-full fill-white hover:fill-yellow-300 active:fill-yellow-400"
              >
                <path
                  d="M 674.464844 822.738281 C 755.828125 822.738281 822.203125 756.363281 822.203125 675 C 822.203125 642.882812 811.5 612.90625 794.371094 588.28125 C 767.605469 550.8125 723.710938 526.191406 674.464844 526.191406 C 625.21875 526.191406 581.324219 550.8125 554.558594 588.28125 C 537.429688 612.90625 526.726562 642.882812 526.726562 675 C 526.726562 756.363281 593.101562 822.738281 674.464844 822.738281 Z M 674.464844 822.738281 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
                <path
                  d="M 904.640625 675 C 904.640625 802.398438 801.863281 905.175781 674.464844 905.175781 C 547.066406 905.175781 444.289062 802.398438 444.289062 675 C 444.289062 643.953125 450.714844 610.765625 461.417969 589.355469 L 331.878906 589.355469 L 331.878906 933.007812 C 331.878906 977.972656 371.492188 1017.585938 416.457031 1017.585938 L 932.472656 1017.585938 C 977.4375 1017.585938 1017.050781 977.972656 1017.050781 933.007812 L 1017.050781 589.355469 L 887.511719 589.355469 C 898.214844 610.765625 904.640625 645.023438 904.640625 675 Z M 904.640625 675 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
                <path
                  d="M 995.636719 494.070312 L 995.636719 350.613281 L 978.507812 351.683594 L 854.320312 351.683594 L 854.320312 494.070312 Z M 995.636719 494.070312 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
                <path
                  d="M 1010.625 0.535156 L 338.304688 0.535156 C 152.023438 0.535156 0 152.558594 0 338.839844 L 0 1012.230469 C 0 1197.441406 152.023438 1349.464844 338.304688 1349.464844 L 1011.695312 1349.464844 C 1197.976562 1349.464844 1350 1197.441406 1350 1011.160156 L 1350 338.839844 C 1348.929688 152.558594 1196.90625 0.535156 1010.625 0.535156 Z M 1091.992188 588.28125 L 1091.992188 933.007812 C 1091.992188 1022.9375 1022.402344 1092.527344 932.472656 1092.527344 L 416.457031 1092.527344 C 326.527344 1092.527344 256.9375 1022.9375 256.9375 933.007812 L 256.9375 416.992188 C 256.9375 327.0625 326.527344 257.472656 416.457031 257.472656 L 932.472656 257.472656 C 1022.402344 257.472656 1091.992188 327.0625 1091.992188 416.992188 Z M 1091.992188 588.28125 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mb-20 lg:mb-0">
          <h3 className="mb-4 text-center text-3xl">Links</h3>
          <Link
            href="/events"
            className="mb-2 flex items-center justify-center rounded-lg px-4 py-2 text-lg hover:text-yellow-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300 active:text-yellow-400"
          >
            <span>events</span>
          </Link>
          <Link
            href="/rules"
            className="mb-2 flex items-center justify-center rounded-lg px-4 py-2 text-lg hover:text-yellow-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300 active:text-yellow-400"
          >
            <span>rules</span>
          </Link>
          <Link
            href="/tickets"
            className="mb-2 flex items-center justify-center rounded-lg px-4 py-2 text-lg hover:text-yellow-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300 active:text-yellow-400"
          >
            <span>tickets</span>
          </Link>
        </div>
      </div>

      <div className="w-full py-4 text-center text-sm">
        <p>© 2025 Baltimore Corgis</p>
      </div>
    </footer>
  );
}
