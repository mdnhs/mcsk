import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { getEvent, getEventSlugs } from "@/sanity/lib/data";
import { urlFor } from "@/sanity/lib/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) {
    notFound();
  }
  return {
    title: event.name,
  };
}

export async function generateStaticParams() {
  const events = await getEventSlugs();

  return events.map((event) => ({
    slug: event.slug.current,
  }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEvent(slug);
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

  await connection();
  const currentTime = new Date();
  const eventHasEnded = endTime ? new Date(endTime) < currentTime : false;
  const eventDate = startTime
    ? new Date(startTime).toLocaleDateString("en-US", {
        timeZone: "America/New_York",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "TBA";
  const eventTime = startTime
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
    : "TBA";
  const detailItems = [
    { label: "Date", value: eventDate },
    { label: "Time", value: eventTime },
    { label: "Venue", value: venue || "TBA" },
    { label: "Admission", value: admissionPrice || "Free" },
  ];

  return (
    <main className="mb-36 flex w-full max-w-pageWidth flex-col px-4 py-8 text-white lg:px-8 lg:py-12">
      <Link
        href="/events"
        className="mb-8 flex w-max rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] hover:border-yellow-300 hover:text-yellow-300 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-yellow-300 active:text-yellow-400 lg:mb-10"
      >
        ← Back to events
      </Link>

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br from-baltimorePurple via-[#072415] to-neutral-950 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] lg:rounded-[2.5rem] lg:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/8 to-transparent" />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_380px] lg:gap-10">
          <div className="flex flex-col">
            <div className="mb-6 flex flex-wrap gap-3">
              <Badge className="border-transparent bg-white/12 text-white">
                Event
              </Badge>
              <Badge
                className={
                  eventHasEnded
                    ? "border-transparent bg-white/12 text-white/80"
                    : "border-transparent bg-baltimoreGold/90 text-black"
                }
              >
                {eventHasEnded ? "Closed" : "Upcoming"}
              </Badge>
            </div>

            {name ? (
              <h1 className="mb-5 max-w-4xl font-gill-sans text-5xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
                {name}
              </h1>
            ) : null}

            <p className="mb-8 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              Join the community for a featured gathering with clear event
              details, location information, and the next action all in one
              place.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Badge className="bg-white/10 px-4 py-2 text-white">
                {eventDate}
              </Badge>
              <Badge className="bg-white/10 px-4 py-2 text-white">
                {eventTime}
              </Badge>
              <Badge className="bg-baltimoreGold/18 px-4 py-2 text-yellow-300">
                {venue || "Venue TBA"}
              </Badge>
            </div>

            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/18">
              <Image
                src={eventImageUrl || "https://placehold.co/1200x760/png"}
                alt={name || "Event"}
                className="aspect-[16/10] w-full object-cover object-center"
                height={760}
                width={1200}
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <Card className="border-white/10 bg-white/7 text-white">
              <CardHeader className="p-6">
                <CardDescription className="font-montserrat-600 uppercase tracking-[0.2em] text-yellow-300">
                  Event Snapshot
                </CardDescription>
                <CardTitle className="font-gill-sans text-3xl text-white">
                  Plan your visit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 p-6 pt-0">
                <dl className="space-y-4">
                  {detailItems.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[96px_1fr] gap-3 rounded-2xl border border-white/8 bg-black/15 px-4 py-3"
                    >
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-medium text-white md:text-base">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Separator className="bg-white/10" />

                {eventHasEnded ? (
                  <Button
                    disabled
                    size="lg"
                    className="w-full bg-gray-400 text-black hover:bg-gray-400"
                  >
                    Event Ended
                  </Button>
                ) : eventDetailsButtonURL ? (
                  <Link
                    href={eventDetailsButtonURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      size: "lg",
                      className:
                        "w-full justify-center bg-baltimoreGold text-black hover:bg-yellow-400",
                    })}
                  >
                    {eventDetailsButtonText || "Learn More"}
                  </Link>
                ) : null}
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader className="p-6">
                <CardDescription className="font-montserrat-600 uppercase tracking-[0.2em] text-white/55">
                  Details
                </CardDescription>
                <CardTitle className="font-gill-sans text-3xl text-white">
                  Event information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                {details && details.length > 0 ? (
                  <div className="max-w-none text-base leading-8 text-white/82 portable-text-event-details">
                    <PortableText value={details} />
                  </div>
                ) : (
                  <p className="text-base leading-7 text-white/65">
                    More event details will be published soon.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
