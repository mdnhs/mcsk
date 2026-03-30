import { Suspense } from "react";
import { eventSearchParams } from "@/app/events/search-params";
import type { Metadata } from "next";
import { createLoader } from "nuqs/server";
import AllEvents from "@/components/all-events";

export const metadata: Metadata = {
  title: "Events",
  description: "View all events",
  alternates: {
    canonical: "https://mcsk-khulna.vercel.app/events",
  },
};

const loadEventSearchParams = createLoader(eventSearchParams);

async function EventsPageContent({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const parsedSearchParams = await loadEventSearchParams(searchParams);

  return (
    <AllEvents
      initialTab={parsedSearchParams.tab}
      initialFilters={{
        q: parsedSearchParams.q,
        city: parsedSearchParams.city,
        venue: parsedSearchParams.venue,
        month: parsedSearchParams.month,
        price: parsedSearchParams.price,
      }}
    />
  );
}

export default function EventsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mb-60 w-full max-w-pageWidth px-4 pt-20">
          <div className="mb-12 flex flex-col items-center gap-5 text-center">
            <h1 className="font-gill-sans text-5xl text-white">Events</h1>
            <p className="max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              Loading events...
            </p>
          </div>
        </div>
      }
    >
      <EventsPageContent searchParams={searchParams} />
    </Suspense>
  );
}
