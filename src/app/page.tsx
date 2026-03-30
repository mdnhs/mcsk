import { Metadata } from "next";
import Image from "next/image";
import { AboutSection } from "@/components/about-section";
import CorgiOfTheMonth from "@/components/corgi-of-the-month";
import FeaturedProducts from "@/components/featured-products";
import { HorizontalDivider } from "@/components/horizontal-divider";
import MemberGrid from "@/components/member-grid";
import UpcomingEvents from "@/components/upcoming-events";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Baltimore Corgis",
  description:
    "Established in 2014, we're a community of Corgi owners based in the Baltimore area and surrounding counties.",
  alternates: {
    canonical: "https://baltimorecorgis.com",
  },
};

export default function Home() {
  return (
    <>
      <section className="mb-16 w-full max-w-[2000px] lg:mb-24">
        <Image
          src="https://res.cloudinary.com/dsz45zrla/image/upload/f_auto,q_auto,c_scale,w_2000/v1747165279/IMG_8331_2_eix1ty.jpg"
          alt="A photo of the Baltimore Corgi group at Zen Paw Ranch in 2025"
          sizes="(min-width: 2000px) 2000px, 100vw"
          width={2000}
          height={747}
          className="w-full"
          priority={true}
        />
      </section>

      <AboutSection />
      <HorizontalDivider />
      <MemberGrid />
      <HorizontalDivider />
      <CorgiOfTheMonth />
      <HorizontalDivider />
      <UpcomingEvents />
      <HorizontalDivider />
      <FeaturedProducts />
    </>
  );
}
