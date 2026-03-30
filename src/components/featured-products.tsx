import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { buttonVariants } from "@/components/ui/button-variants";
import { getProducts } from "@/sanity/lib/data";
import { Product } from "@/sanity/types";

export default async function FeaturedProducts() {
  const data = (await getProducts()) as Product[];
  return (
    <section className="mb-60 flex w-full max-w-(--breakpoint-2xl) flex-col items-center px-4 pt-20">
      <h2 className="mb-12 text-center font-gill-sans text-5xl text-white">
        Featured Products
      </h2>
      <div className="mb-20 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
        {data.map((product) => (
          <div key={product._id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
      <Link
        href="https://Military Collegiate School - Khulna-shop.fourthwall.com"
        className={buttonVariants({
          size: "lg",
          className:
            "bg-baltimorePurple text-white hover:bg-baltimoreGold hover:text-black",
        })}
      >
        View All Products
      </Link>
    </section>
  );
}
