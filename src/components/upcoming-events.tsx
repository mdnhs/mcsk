import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { UPCOMING_EVENTS_QUERY } from "@/sanity/lib/queries";
import EventList from "@/components/event-list";

export default async function UpcomingEvents() {
  const { data } = await sanityFetch({ query: UPCOMING_EVENTS_QUERY });

  const nextThreeEvents = data.slice(0, 3);

  return (
    <section className="mb-20 flex w-full max-w-screen-2xl flex-col items-center px-4 pt-20">
      <h2 className="mb-12 text-center font-gillSans text-5xl text-white">
        Upcoming Events
      </h2>
      {nextThreeEvents.length > 0 ? (
        <EventList events={nextThreeEvents} />
      ) : (
        <p className="mb-24 text-center text-lg text-white">
          No upcoming events
        </p>
      )}
      <Link
        href="/events"
        className="ui-button bg-baltimorePurple  text-white hover:bg-baltimoreGold focus-visible:ring-yellow-300 focus-visible:ring-offset-8 focus-visible:ring-offset-neutral-950 active:bg-baltimoreGoldDarker"
      >
        View All Events
      </Link>
    </section>
  );
}
