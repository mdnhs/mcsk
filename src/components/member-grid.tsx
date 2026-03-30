import { sanityFetch } from "@/sanity/lib/live";
import { MEMBERS_QUERY } from "@/sanity/lib/queries";
import { MemberCard } from "@/components/member-card";

export default async function MemberGrid() {
  const { data } = await sanityFetch({ query: MEMBERS_QUERY });
  return (
    <section className="mb-20 w-full max-w-screen-2xl px-4 pt-20">
      <h2 className="mb-12 text-center font-gillSans text-5xl text-white">
        Meet some of our members...
      </h2>
      <ul className="grid grid-cols-3 gap-2 lg:grid-cols-5 lg:gap-4">
        {data.map((member) => (
          <li key={member._id}>
            <MemberCard {...member} />
          </li>
        ))}
      </ul>
    </section>
  );
}
