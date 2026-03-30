import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { EVENT_QUERY } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { data: event } = await sanityFetch({
    query: EVENT_QUERY,
    params: await params,
  });
  if (!event) {
    notFound();
  }
  return {
    title: event.name,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: event } = await sanityFetch({
    query: EVENT_QUERY,
    params: await params,
  });
  if (!event) {
    notFound();
  }
  const {
    name,
    mainImage,
    details,
    admissionPrice,
    startTime,
    endTime,
    venue,
    eventDetailsButtonText,
    eventDetailsButtonURL,
  } = event;
  const eventImageUrl = mainImage
    ? urlFor(mainImage)?.width(550).height(550).url()
    : null;

  const currentTime = new Date();
  const eventHasEnded = endTime ? new Date(endTime) < currentTime : false;

  return (
    <main className="mb-60 flex w-full max-w-screen-xl flex-col p-8 text-white">
      <Link
        href="/events"
        className="mb-16 flex w-max rounded px-4 py-2 hover:text-yellow-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300 active:text-yellow-400"
      >
        ← Back to events
      </Link>

      <div className="flex flex-col items-center sm:flex-row sm:items-start">
        <Image
          src={eventImageUrl || "https://placehold.co/550x550/png"}
          alt={name || "Event"}
          className="mb-8 w-full max-w-96 rounded-xl object-cover object-center sm:mb-0 sm:h-60 sm:w-60"
          height={550}
          width={550}
        />
        <div className="flex flex-col justify-center px-8">
          <div className="mb-16 space-y-4">
            {name && (
              <h1 className="mb-8 text-4xl font-bold tracking-tighter">
                {name}
              </h1>
            )}

            <div className="flex items-center space-x-4">
              <dl className="grid grid-cols-2 gap-2 text-base font-medium">
                <dt className="font-semibold">Date</dt>
                <dd>
                  {startTime
                    ? new Date(startTime).toLocaleDateString("en-US", {
                        timeZone: "America/New_York",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "TBA"}
                </dd>

                <dt className="font-semibold">Time</dt>
                <dd>
                  {startTime
                    ? endTime
                      ? `${new Date(startTime).toLocaleTimeString("en-US", {
                          timeZone: "America/New_York",
                          hour: "numeric",
                          minute: "2-digit",
                        })} - ${new Date(endTime).toLocaleTimeString("en-US", {
                          timeZone: "America/New_York",
                          hour: "numeric",
                          minute: "2-digit",
                        })}`
                      : new Date(startTime).toLocaleTimeString("en-US", {
                          timeZone: "America/New_York",
                          hour: "numeric",
                          minute: "2-digit",
                        })
                    : "TBA"}
                </dd>

                <dt className="font-semibold">Venue</dt>
                <dd>{venue || "TBA"}</dd>

                <dt className="font-semibold">Admission Price</dt>
                <dd>{admissionPrice || "Free"}</dd>
              </dl>
            </div>
          </div>

          <h2 className="text-2xl mb-4 font-bold">Event Details</h2>
          {details && details.length > 0 && (
            <div className="mb-16 max-w-none portable-text-event-details">
              <PortableText value={details} />
            </div>
          )}

          {eventHasEnded ? (
            <p className="ui-button flex w-min whitespace-nowrap bg-gray-400 text-black">
              Event Ended
            </p>
          ) : (
            eventDetailsButtonURL && (
              <Link
                href={eventDetailsButtonURL}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-button flex w-min whitespace-nowrap bg-yellow-500 text-black hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-300 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950 active:bg-yellow-700"
              >
                {eventDetailsButtonText}
              </Link>
            )
          )}
        </div>
      </div>
    </main>
  );
}
