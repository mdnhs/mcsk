import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type ProductCardProps = {
  name?: string | null;
  subtitle?: string | null;
  link?: string | null;
  image?: object | null;
  imageAltText?: string | null;
};

export function ProductCard({
  name,
  link,
  image,
  imageAltText,
}: ProductCardProps) {
  const productImageUrl = image
    ? urlFor(image)?.width(550).height(550).url()
    : null;
  return (
    <a
      href={link ?? "#"}
      className="group flex w-full flex-col items-center rounded-2xl p-2 text-white hover:text-yellow-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-inset focus-visible:ring-yellow-300 active:text-yellow-500 lg:rounded-3xl lg:p-4"
    >
      <Image
        src={productImageUrl || "https://placehold.co/550x550/png"}
        alt={imageAltText || "Product"}
        className="mb-4 w-full rounded-xl object-cover object-center group-hover:brightness-90 group-active:brightness-75"
        height="550"
        width="550"
        sizes="
        (max-width: 1024px) calc((100vw - 72px) / 2), 
        (max-width: 1550px) calc((100vw - 208px) / 4), 
        332px
      "
      />
      <h3 className="mb-2 text-balance text-center text-base sm:text-lg lg:text-xl">
        {name}
      </h3>
    </a>
  );
}
