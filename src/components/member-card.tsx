import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
      className="group block rounded-[2rem] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-yellow-300"
    >
      <Card className="h-full overflow-hidden border-white/12 bg-white/6 text-white transition-transform duration-200 group-hover:-translate-y-1">
        <CardContent className="p-2 lg:p-4">
          <Image
            src={memberImageUrl || "https://placehold.co/550x550/png"}
            alt={imageAltText || "Member"}
            className="mb-4 w-full rounded-[1.35rem] object-cover object-center group-hover:brightness-110 group-active:brightness-105"
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
          <h4 className="mb-2 text-center font-montserrat-light text-sm italic text-neutral-200 group-hover:text-yellow-400 group-active:text-yellow-500 lg:text-lg">
            {subtitle}
          </h4>
        </CardContent>
      </Card>
    </a>
  ) : (
    <Card className="h-full overflow-hidden border-white/12 bg-white/6 text-white">
      <CardContent className="p-2 lg:p-4">
        <Image
          src={memberImageUrl || "https://placehold.co/550x550/png"}
          alt={imageAltText || "Member"}
          className="mb-4 w-full rounded-[1.35rem] object-cover object-center"
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
        <h4 className="mb-2 text-center font-montserrat-light text-sm italic text-neutral-200 lg:text-lg">
          {subtitle}
        </h4>
      </CardContent>
    </Card>
  );
}
