import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent } from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import { Event } from "@/sanity/types";

export function EventCard({ event }: { event: Event }) {
  const eventImageUrl = event?.mainImage
    ? urlFor(event.mainImage)?.width(550).height(550).url()
    : "https://placehold.co/550x550/png";
  const eventDate = event?.startTime
    ? new Date(event.startTime).toLocaleDateString("en-US", {
        timeZone: "America/New_York",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;
  const eventTime =
    event?.startTime && event?.endTime
      ? `${new Date(event.startTime).toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "2-digit",
        })} - ${new Date(event.endTime).toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "2-digit",
        })}`
      : null;

  return (
    <li className="w-full max-w-(--breakpoint-sm) lg:max-w-7xl" key={event._id}>
      <Card className="overflow-hidden bg-linear-to-br from-white to-neutral-100 text-baltimorePurple transition-transform duration-200 hover:-translate-y-1">
        <CardContent className="grid gap-5 p-4 lg:grid-cols-[240px_1fr_auto] lg:items-center lg:p-5">
          {eventImageUrl && (
            <Image
              src={eventImageUrl}
              alt={event.mainImageAltText || "Event"}
              className="w-full rounded-[1.4rem] border-2 border-solid border-baltimorePurple/80 object-cover lg:h-60 lg:w-60"
              width={550}
              height={550}
            />
          )}

          <div className="flex w-full flex-col">
            {event?.name && (
              <h2 className="mb-3 font-montserrat-500 text-2xl lg:text-3xl">
                {event.name}
              </h2>
            )}

            <div className="mb-4 flex flex-wrap gap-2">
              {eventDate ? (
                <Badge className="bg-baltimorePurple/8 text-baltimorePurple">
                  {eventDate}
                </Badge>
              ) : null}
              {eventTime ? (
                <Badge className="bg-baltimorePurple/8 text-baltimorePurple">
                  {eventTime}
                </Badge>
              ) : null}
              {event?.venue ? (
                <Badge className="bg-baltimoreGold/12 text-baltimorePurple">
                  {event.venue}
                </Badge>
              ) : null}
            </div>

            {event?.city && (
              <p className="mb-2 text-lg text-neutral-700">
                {event.city}, {event.state}
              </p>
            )}

            {event?.admissionPrice && (
              <p className="text-lg text-neutral-700">
                Admission: {event.admissionPrice}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            {event?.startTime && (
              <div className="hidden min-w-24 rounded-[1.6rem] bg-baltimorePurple px-6 py-5 text-center text-white lg:block">
                <span className="block font-chunk-five text-5xl">
                  {new Date(event.startTime).toLocaleString("en-US", {
                    timeZone: "America/New_York",
                    day: "numeric",
                  })}
                </span>
                <span className="text-sm uppercase tracking-[0.24em] text-yellow-300">
                  {new Date(event.startTime).toLocaleString("en-US", {
                    timeZone: "America/New_York",
                    month: "short",
                  })}
                </span>
              </div>
            )}

            {event?.slug?.current && (
              <Link
                href={`/events/${event.slug.current}`}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "bg-baltimorePurple text-white hover:bg-baltimoreGold hover:text-black",
                })}
              >
                View Details
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </li>
  );
}
