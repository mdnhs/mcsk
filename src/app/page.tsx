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
  title: "Military Collegiate School - Khulna",
  description:
    "Military Collegiate School Khulna (MCSK) is a residential school for both boys (VII-XII) and girls (VII-XII) offering a sprawling campus spread over 105 acres of lush green lands, situated in the close proximity to city, with connectivity via road and railway communication. Jashore Airport is about an hour plus drive from MCSK. It is approximately 6.5 km North West of Jahanabad Cantonment, Khulna and about 4.5 km South West from Phultala Upazilla.",
  alternates: {
    canonical: "https://mcsk-khulna.vercel.app",
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
      {/* <HorizontalDivider />
      <CorgiOfTheMonth /> */}
      <HorizontalDivider />
      <UpcomingEvents />
      <HorizontalDivider />
      <FeaturedProducts />
    </>
  );
}
