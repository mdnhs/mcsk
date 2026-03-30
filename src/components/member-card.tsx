import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type MemberCardProps = {
  name?: string | null;
  subtitle?: string | null;
  link?: string | null;
  image?: object | null;
  imageAltText?: string | null;
};
export function MemberCard({
  name,
  subtitle,
  link,
  image,
  imageAltText,
}: MemberCardProps) {
  const memberImageUrl = image
    ? urlFor(image)?.width(550).height(550).url()
    : null;
  return link ? (
    <a
      href={link}
      className="group flex w-full flex-col items-center rounded-2xl p-2 text-white hover:text-yellow-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-inset focus-visible:ring-yellow-300 active:text-yellow-500 lg:rounded-3xl lg:p-4"
    >
      <Image
        src={memberImageUrl || "https://placehold.co/550x550/png"}
        alt={imageAltText || "Member"}
        className="mb-4 w-full rounded-xl object-cover object-center group-hover:brightness-110 group-active:brightness-105"
        height="550"
        width="550"
        sizes="
          (max-width: 1024px) calc((100vw - 96px) / 3), 
          (max-width: 1550px) calc((100vw - 272px) / 5), 
          256px
        "
      />
      <h3 className="mb-2 text-center text-base sm:text-lg lg:text-2xl">
        {name}
      </h3>
      <h4 className="mb-4 text-center font-montserratLight text-sm italic text-neutral-200 group-hover:text-yellow-500 group-active:text-yellow-600 lg:text-lg">
        {subtitle}
      </h4>
    </a>
  ) : (
    <div className="flex w-full flex-col items-center rounded-2xl p-2 text-white lg:rounded-3xl lg:p-4">
      <Image
        src={memberImageUrl || "https://placehold.co/550x550/png"}
        alt={imageAltText || "Member"}
        className="mb-4 w-full rounded-xl object-cover object-center"
        height="550"
        width="550"
        sizes="
          (max-width: 1024px) calc((100vw - 96px) / 3), 
          (max-width: 1550px) calc((100vw - 272px) / 5), 
          256px
      "
      />
      <h3 className="mb-2 text-center text-base sm:text-lg lg:text-2xl">
        {name}
      </h3>
      <h4 className="mb-4 text-center font-montserratLight text-sm italic text-neutral-200 lg:text-lg">
        {subtitle}
      </h4>
    </div>
  );
}
