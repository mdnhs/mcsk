import EventList from "@/components/event-list";
import { getPastEvents, getUpcomingEvents } from "@/sanity/lib/data";

export default async function AllEvents() {
  const [upcomingEvents, pastEvents] = await Promise.all([
    getUpcomingEvents(),
    getPastEvents(),
  ]);

  return (
    <div className="mb-60 w-full max-w-(--breakpoint-2xl) px-4 pt-20">
      <div className="mb-60 flex flex-col items-center">
        <h1 className="mb-12 text-center font-gill-sans text-5xl text-white">
          Upcoming Events
        </h1>
        {upcomingEvents.length > 0 ? (
          <EventList events={upcomingEvents} />
        ) : (
          <p className="w-ful text-center max-w-(--breakpoint-sm) text-white lg:max-w-7xl">
            No upcoming events.
          </p>
        )}
      </div>

      <div className="flex flex-col items-center">
        <h2 className="mb-12 text-center font-gill-sans text-5xl text-white">
          Past Events
        </h2>
        {pastEvents.length > 0 ? (
          <EventList events={pastEvents} />
        ) : (
          <p className="w-full text-center max-w-(--breakpoint-sm) text-white lg:max-w-7xl">
            No past events.
          </p>
        )}
      </div>
    </div>
  );
}
