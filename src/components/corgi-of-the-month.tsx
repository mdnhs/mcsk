import Image from "next/image";

export default function CorgiOfTheMonth() {
  return (
    <>
      <section className="relative isolate mb-40 flex w-full max-w-screen-lg flex-col items-center px-6 pt-20 lg:grid lg:pt-40">
        <div className="relative -bottom-4 lg:absolute lg:left-2 lg:top-32 lg:col-span-1 lg:row-span-1 lg:flex lg:items-center lg:justify-start">
          <div className="flex w-40 shrink-0 justify-center">
            <Image
              height={1125}
              width={602}
              src="https://res.cloudinary.com/dsz45zrla/image/upload/f_auto,q_auto,c_scale,w_320/v1737323034/baltimore-corgis/phone_ut9pvv.png"
              alt="A mobile phone displaying The Baltimore Corgis Instagram page"
              sizes="160px"
            />
          </div>
        </div>
        <div className="col-start-1 row-start-1 flex items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center rounded-3xl bg-baltimorePurple p-8 lg:w-full lg:px-12 lg:py-6">
            <p className="mb-6 w-full max-w-2xl text-balance text-center text-2xl text-white">
              Do you want to be featured as Corgi of the Month on our Instagram?
            </p>
            <a
              className="flex rounded-2xl p-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300"
              href="https://docs.google.com/forms/d/e/1FAIpQLScuZM7H0AbcYEx2f4Nbyol46tobRUrzx5PXgQcy720ynd_RYw/viewform"
            >
              <span className="ui-button bg-white text-baltimorePurple hover:bg-baltimoreGold active:bg-baltimoreGoldDarker">
                SIGN UP
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
