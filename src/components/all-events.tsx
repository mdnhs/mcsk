import { sanityFetch } from "@/sanity/lib/live";
import { PAST_EVENTS_QUERY, UPCOMING_EVENTS_QUERY } from "@/sanity/lib/queries";
import EventList from "@/components/event-list";

export default async function AllEvents() {
  const { data: upcomingEvents } = await sanityFetch({
    query: UPCOMING_EVENTS_QUERY,
  });
  const { data: pastEvents } = await sanityFetch({ query: PAST_EVENTS_QUERY });

  return (
    <div className="mb-60 w-full max-w-screen-2xl px-4 pt-20">
      <div className="mb-60 flex flex-col items-center">
        <h1 className="mb-12 text-center font-gillSans text-5xl text-white">
          Upcoming Events
        </h1>
        {upcomingEvents.length > 0 ? (
          <EventList events={upcomingEvents} />
        ) : (
          <p className="w-ful text-center max-w-screen-sm text-white lg:max-w-7xl">
            No upcoming events.
          </p>
        )}
      </div>

      <div className="flex flex-col items-center">
        <h2 className="mb-12 text-center font-gillSans text-5xl text-white">
          Past Events
        </h2>
        {pastEvents.length > 0 ? (
          <EventList events={pastEvents} />
        ) : (
          <p className="w-full text-center max-w-screen-sm text-white lg:max-w-7xl">
            No past events.
          </p>
        )}
      </div>
    </div>
  );
}
