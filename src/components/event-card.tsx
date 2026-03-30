import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Event } from "@/sanity/types";

export function EventCard({ event }: { event: Event }) {
  const eventImageUrl = event?.mainImage
    ? urlFor(event.mainImage)?.width(550).height(550).url()
    : "https://placehold.co/550x550/png";

  return (
    <li
      className="flex w-full max-w-(--breakpoint-sm) flex-col items-center rounded-[2rem] border border-white/10 bg-linear-to-br from-white to-neutral-100 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.16)] transition-transform duration-200 hover:-translate-y-1 lg:max-w-7xl lg:flex-row lg:items-start lg:p-5"
      key={event._id}
    >
      {event?.name && (
        <div className="flex w-full flex-row  justify-between lg:hidden">
          <h2 className="mb-4 text-start font-montserrat-500 text-2xl text-baltimorePurple">
            {event.name}
          </h2>
        </div>
      )}

      {eventImageUrl && (
        <Image
          src={eventImageUrl}
          alt={event.mainImageAltText || "Event"}
          className="mb-4 w-full rounded-[1.4rem] border-2 border-solid border-baltimorePurple/80 object-cover lg:mb-0 lg:h-60 lg:w-60"
          width={550}
          height={550}
        />
      )}

      {event?.startTime && (
        <div className="hidden flex-col items-center p-4 px-8 lg:flex">
          <span className="mb-2 min-w-20 text-center font-chunk-five text-6xl text-baltimorePurple">
            {new Date(event.startTime).toLocaleString("en-US", {
              timeZone: "America/New_York",
              day: "numeric",
            })}
          </span>
          <span className="text-base uppercase">
            {new Date(event.startTime).toLocaleString("en-US", {
              timeZone: "America/New_York",
              month: "short",
            })}
          </span>
        </div>
      )}

      <div className="mb-4 flex w-full flex-col lg:mb-0">
        {event?.name && (
          <h2 className="mb-0 hidden font-montserrat-500 text-3xl text-baltimorePurple lg:mb-2 lg:block">
            {event.name}
          </h2>
        )}

        <div className="mb-4 flex flex-wrap gap-2 text-sm">
          {event?.startTime && (
            <p className="rounded-full bg-baltimorePurple/8 px-3 py-1.5 font-medium text-baltimorePurple">
              {new Date(event.startTime).toLocaleDateString("en-US", {
                timeZone: "America/New_York",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}

          {event?.startTime && event?.endTime && (
            <p className="rounded-full bg-baltimorePurple/8 px-3 py-1.5 font-medium text-baltimorePurple">
              {`${new Date(event.startTime).toLocaleTimeString("en-US", {
                timeZone: "America/New_York",
                hour: "numeric",
                minute: "2-digit",
              })} - ${new Date(event.endTime).toLocaleTimeString("en-US", {
                timeZone: "America/New_York",
                hour: "numeric",
                minute: "2-digit",
              })}`}
            </p>
          )}

          {event?.venue && (
            <p className="rounded-full bg-baltimoreGold/12 px-3 py-1.5 font-medium text-baltimorePurple">
              {event.venue}
            </p>
          )}
        </div>

        {event?.city && (
          <p className="mb-2 text-lg text-neutral-700">
            {event.city}, {event.state}
          </p>
        )}

        {event?.admissionPrice && (
          <p className="mb-2 text-lg text-neutral-700">
            Admission: {event.admissionPrice}
          </p>
        )}
      </div>

      <div className="flex flex-col items-center lg:pl-8 lg:self-center">
        {event?.slug?.current && (
          <Link
            href={`/events/${event.slug.current}`}
            className="ui-button flex whitespace-nowrap bg-baltimorePurple text-white hover:bg-baltimoreGold focus-visible:ring-baltimoreGold focus-visible:ring-offset-4 focus-visible:ring-offset-white active:bg-baltimoreGoldDarker"
          >
            View Details
          </Link>
        )}
      </div>
    </li>
  );
}
