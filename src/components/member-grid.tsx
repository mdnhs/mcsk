import { getMembers } from "@/sanity/lib/data";
import { MemberCard } from "@/components/member-card";

export default async function MemberGrid() {
  const data = await getMembers();
  return (
    <section className="mb-20 w-full max-w-(--breakpoint-2xl) px-4 pt-20">
      <h2 className="mb-12 text-center font-gill-sans text-5xl text-white">
        Meet our committee members...
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
