import { Event } from "@/sanity/types";
import { EventCard } from "@/components/event-card";

type EventListProps = {
  events: Event[];
};

export default function EventList({ events }: EventListProps) {
  return (
    <section className="mb-20 flex w-full flex-col gap-12">
      <ul className="flex w-full flex-col items-center gap-12">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </ul>
    </section>
  );
}
