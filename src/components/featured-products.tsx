import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { ProductCard } from "@/components/product-card";

export default async function FeaturedProducts() {
  const { data } = await sanityFetch({ query: PRODUCTS_QUERY });
  return (
    <section className="mb-60 flex w-full max-w-screen-2xl flex-col items-center px-4 pt-20">
      <h2 className="mb-12 text-center font-gillSans text-5xl text-white">
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
        href="https://baltimore-corgis-shop.fourthwall.com"
        className="ui-button bg-baltimorePurple text-white hover:bg-baltimoreGold focus-visible:ring-yellow-300 focus-visible:ring-offset-8 focus-visible:ring-offset-neutral-950 active:bg-baltimoreGoldDarker"
      >
        View All Products
      </Link>
    </section>
  );
}
