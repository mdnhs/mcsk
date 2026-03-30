import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules",
  description: "Event rules and group rules",
  alternates: {
    canonical: "https://baltimorecorgis.com/rules",
  },
};

const eventRules = [
  {
    id: 1,
    title: "No Food or Dog Treats",
    description:
      "Please no human food or dog treats. Handing out treats may cause unnecessary conflict. Some dogs may also have allergies or diet restrictions.",
  },
  {
    id: 2,
    title: "No Toys or Balls",
    description:
      "Please refrain from playing with toys or balls. Some dogs are possessive over toys/balls and this causes unnecessary conflict.",
  },
  {
    id: 3,
    title: "Clean Up After Your Dog",
    description:
      "Please keep an eye on your dog and clean up after them. In most cases, there will be supplies such as paper towels, spray, poop bags, trash cans, etc.",
  },
];

const groupRules = [
  {
    id: 1,
    title: "Membership Questions Require Answers",
    description:
      "If questions are left blank, you will not be approved. If you're inviting friends, let them know to visit the group page to answer the questions.",
  },
  {
    id: 2,
    title: "No Corgi for Sale Posts",
    description:
      '"For Sale" or "Selling" posts will not be permitted. Posts may only permit re-homing or adoption',
  },
  {
    id: 3,
    title: "In Search of Corgi Posts",
    description:
      "ISO posts may not be allowed commenting in order to avoid publicizing the promotion of breeders. Do not use language that promotes buying, selling, or breeders in your post or it will be denied.",
  },
  {
    id: 4,
    title: "Breeders",
    description:
      "You may not publicize or promote puppies, new litters, or your business. Selling animals is against Facebook rules.",
  },
  {
    id: 5,
    title: "Corgi Only Promotions",
    description:
      "Promotions are only allowed if they are supporting a local business and are specifically Corgi related. (i.e. Your corgis Instagram or Facebook page, Etsy for Corgi items, or Corgi-related events.)",
  },
  {
    id: 6,
    title: "No Stud Posts",
    description:
      "Posts asking where to find or in search of a breeding mate will not be permitted.",
  },
  {
    id: 7,
    title: "Keep Political Views to Yourself",
    description:
      "Please keep political views on your own page. This is not the place to discuss it.",
  },
  {
    id: 8,
    title: "Be Kind and Courteous",
    description: "This is self-explanatory. Just be nice!",
  },
  {
    id: 9,
    title: "No Hate Speech or Bullying",
    description:
      "Bullying of any kind is not allowed, and degrading comments about things like race, religion, culture, sexual orientation, gender, or identity will not be tolerated.",
  },
];

export default function RulesPage() {
  return (
    <div className="mb-20 flex w-full flex-col items-center px-8 pt-20">
      <h1 className="mb-12 text-center font-gillSans text-5xl text-white">
        Group Rules
      </h1>

      <ul className="mb-16">
        {groupRules.map((rule) => (
          <li className="mb-8 flex w-full max-w-2xl flex-row" key={rule.id}>
            <span className="mr-8 block font-chunkFive text-8xl text-white">
              {rule.id}
            </span>

            <div className="flex flex-col">
              <h2 className="mb-2 text-xl font-bold text-yellow-400">
                {rule.title}
              </h2>
              <p className="text-white">{rule.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mb-12 text-center font-gillSans text-5xl text-white">
        Event Rules
      </h2>

      <ul className="mb-16">
        {eventRules.map((rule) => (
          <li className="mb-8 flex w-full max-w-2xl flex-row" key={rule.id}>
            <span className="mr-8 block font-chunkFive text-8xl text-white">
              {rule.id}
            </span>

            <div className="flex flex-col">
              <h2 className="mb-2 text-xl font-bold text-yellow-400">
                {rule.title}
              </h2>
              <p className="text-white">{rule.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
