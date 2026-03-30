import { eventTabOptions } from "@/app/events/search-params";
import EventsBrowser from "@/components/events-browser";
import { getPastEvents, getUpcomingEvents } from "@/sanity/lib/data";

type EventTab = (typeof eventTabOptions)[number];
type EventPrice = "all" | "free" | "paid";

export default async function AllEvents({
  initialTab,
  initialFilters,
}: {
  initialTab: EventTab;
  initialFilters: {
    q: string;
    city: string;
    venue: string;
    month: string;
    price: EventPrice;
  };
}) {
  const [upcomingEvents, pastEvents] = await Promise.all([
    getUpcomingEvents(),
    getPastEvents(),
  ]);

  return (
    <EventsBrowser
      initialTab={initialTab}
      initialFilters={initialFilters}
      upcomingEvents={upcomingEvents}
      pastEvents={pastEvents}
    />
  );
}
