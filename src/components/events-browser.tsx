"use client";

import { useDeferredValue } from "react";
import {
  eventFilterParsers,
  eventPriceOptions,
  eventPriceParser,
  eventTabOptions,
  eventTabParser,
} from "@/app/events/search-params";
import { cn } from "@/lib/utils";
import { useQueryState, useQueryStates } from "nuqs";
import { Event } from "@/sanity/types";
import EventList from "@/components/event-list";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type EventTab = (typeof eventTabOptions)[number];
type EventPrice = (typeof eventPriceOptions)[number];

type EventsBrowserProps = {
  initialTab: EventTab;
  initialFilters: {
    q: string;
    city: string;
    venue: string;
    month: string;
    price: EventPrice;
  };
  upcomingEvents: Event[];
  pastEvents: Event[];
};

const tabLabels: Record<EventTab, string> = {
  upcoming: "Upcoming Events",
  past: "Past Events",
};

export default function EventsBrowser({
  initialTab,
  initialFilters,
  upcomingEvents,
  pastEvents,
}: EventsBrowserProps) {
  const [tab, setTab] = useQueryState(
    "tab",
    eventTabParser.withOptions({ history: "push" })
  );
  const [filters, setFilters] = useQueryStates(eventFilterParsers, {
    history: "replace",
  });
  const activeTab = tab ?? initialTab;
  const activeFilters = {
    q: filters.q ?? initialFilters.q,
    city: filters.city ?? initialFilters.city,
    venue: filters.venue ?? initialFilters.venue,
    month: filters.month ?? initialFilters.month,
    price: filters.price ?? initialFilters.price,
  };
  const deferredQuery = useDeferredValue(activeFilters.q);
  const scopedEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;
  const cityOptions = withSelectedOption(
    uniqueValues(scopedEvents.map((event) => event.city)),
    activeFilters.city
  );
  const venueOptions = withSelectedOption(
    uniqueValues(scopedEvents.map((event) => event.venue)),
    activeFilters.venue
  );
  const monthOptions = withSelectedLabeledOption(
    uniqueMonthOptions(scopedEvents),
    activeFilters.month
  );
  const events = scopedEvents.filter((event) => {
    const eventMonth = getEventMonthValue(event.startTime);
    const searchIndex = [
      event.name,
      event.venue,
      event.city,
      event.state,
      event.admissionPrice,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return (
      (deferredQuery.trim().length === 0 ||
        searchIndex.includes(deferredQuery.trim().toLowerCase())) &&
      (activeFilters.city === "all" || event.city === activeFilters.city) &&
      (activeFilters.venue === "all" || event.venue === activeFilters.venue) &&
      (activeFilters.month === "all" || eventMonth === activeFilters.month) &&
      (activeFilters.price === "all" ||
        getEventPriceBucket(event.admissionPrice) === activeFilters.price)
    );
  });
  const activeFilterCount = [
    activeFilters.q.trim().length > 0,
    activeFilters.city !== "all",
    activeFilters.venue !== "all",
    activeFilters.month !== "all",
    activeFilters.price !== "all",
  ].filter(Boolean).length;
  const activeFilterChips = [
    activeFilters.q.trim().length > 0 ? `Search: ${activeFilters.q}` : null,
    activeFilters.city !== "all" ? `City: ${activeFilters.city}` : null,
    activeFilters.venue !== "all" ? `Venue: ${activeFilters.venue}` : null,
    activeFilters.month !== "all"
      ? `Month: ${labelForOption(monthOptions, activeFilters.month)}`
      : null,
    activeFilters.price !== "all"
      ? `Price: ${labelForOption(
          [
            { value: "all", label: "Any ticket type" },
            { value: "free", label: "Free" },
            { value: "paid", label: "Paid" },
          ],
          activeFilters.price
        )}`
      : null,
  ].filter((value): value is string => Boolean(value));

  return (
    <div className="mb-60 w-full max-w-pageWidth px-4 pt-20">
      <section className="relative mb-12 overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br from-baltimorePurple via-[#0b2518] to-neutral-950 p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] lg:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/8 to-transparent" />
        <div className="relative flex flex-col gap-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-yellow-300">
                Community Calendar
              </p>
              <h1 className="mb-4 font-gill-sans text-5xl text-white md:text-6xl">
                Find the right event faster
              </h1>
              <p className="text-base leading-7 text-white/76 md:text-lg">
                Browse what&apos;s next, revisit past gatherings, and share a
                filter-ready event view directly from the URL.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <MetricCard
                label="Showing"
                value={String(events.length)}
                detail="filtered events"
              />
              <MetricCard
                label="View"
                value={activeTab === "upcoming" ? "Next" : "Past"}
                detail={tabLabels[activeTab]}
              />
              <MetricCard
                label="Filters"
                value={String(activeFilterCount)}
                detail={activeFilterCount === 1 ? "active filter" : "active filters"}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {eventTabOptions.map((tabOption) => {
              const isActive = activeTab === tabOption;
              const count =
                tabOption === "upcoming"
                  ? upcomingEvents.length
                  : pastEvents.length;

              return (
                <button
                  key={tabOption}
                  type="button"
                  onClick={() => setTab(tabOption)}
                  className={buttonVariants({
                    variant: isActive ? "secondary" : "ghost",
                    className: cn(
                      "min-w-40 rounded-full border text-sm uppercase tracking-[0.18em]",
                      isActive
                        ? "border-baltimoreGold bg-baltimoreGold text-black hover:bg-baltimoreGold/90"
                        : "border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-yellow-300"
                    ),
                  })}
                  aria-pressed={isActive}
                >
                  {tabLabels[tabOption]} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
        <aside className="xl:sticky xl:top-24">
          <Card className="overflow-hidden border-white/10 bg-linear-to-br from-white/8 via-white/6 to-white/4 text-white">
            <CardHeader className="gap-4 border-b border-white/10 pb-5">
              <div className="space-y-2">
                <CardTitle className="font-gill-sans text-3xl text-white">
                  Advanced Filters
                </CardTitle>
                <p className="text-sm leading-6 text-white/72">
                  Narrow the event archive by keyword, location, venue, month,
                  or ticket type.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="border-transparent bg-white/10 text-white">
                  {events.length} result{events.length === 1 ? "" : "s"}
                </Badge>
                {activeFilterCount > 0 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setFilters({
                        q: null,
                        city: null,
                        venue: null,
                        month: null,
                        price: null,
                      })
                    }
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className:
                        "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-yellow-300",
                    })}
                  >
                    Clear Filters
                  </button>
                ) : null}
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 p-6">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Search
                </span>
                <input
                  type="search"
                  value={activeFilters.q}
                  onChange={(event) =>
                    setFilters({ q: event.target.value || null })
                  }
                  placeholder="Search events, cities, or venues"
                  className="min-h-12 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-yellow-300 focus:ring-3 focus:ring-yellow-300/30"
                />
              </label>

              <FilterSelect
                label="City"
                value={activeFilters.city}
                options={cityOptions}
                onChange={(value) =>
                  setFilters({ city: value === "all" ? null : value })
                }
              />
              <FilterSelect
                label="Venue"
                value={activeFilters.venue}
                options={venueOptions}
                onChange={(value) =>
                  setFilters({ venue: value === "all" ? null : value })
                }
              />
              <FilterSelect
                label="Month"
                value={activeFilters.month}
                options={monthOptions}
                onChange={(value) =>
                  setFilters({ month: value === "all" ? null : value })
                }
              />
              <FilterSelect
                label="Price"
                value={activeFilters.price}
                options={[
                  { value: "all", label: "Any ticket type" },
                  { value: "free", label: "Free" },
                  { value: "paid", label: "Paid" },
                ]}
                onChange={(value) =>
                  setFilters({
                    price:
                      value === "all"
                        ? null
                        : eventPriceParser.parse(value as EventPrice),
                  })
                }
              />
            </CardContent>
          </Card>
        </aside>

        <div className="flex min-w-0 flex-col">
          <div className="mb-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-white">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="font-gill-sans text-4xl text-white">
                  {tabLabels[activeTab]}
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/70 md:text-base">
                  {activeFilterCount > 0
                    ? "Filtered results based on your current selections."
                    : "Showing the full event list for the selected view."}
                </p>
              </div>
              <Badge className="w-max border-transparent bg-baltimoreGold/90 text-black">
                {events.length} visible
              </Badge>
            </div>

            {activeFilterChips.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeFilterChips.map((chip) => (
                  <Badge
                    key={chip}
                    className="border border-white/10 bg-white/8 text-white"
                  >
                    {chip}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>

          {events.length > 0 ? (
            <EventList events={events} />
          ) : (
            <div className="w-full max-w-3xl rounded-[2rem] border border-dashed border-white/15 bg-white/5 px-6 py-12 text-center text-white">
              <p className="mb-3 font-gill-sans text-3xl text-white">
                No matching events
              </p>
              <p className="text-base leading-7 text-white/72">
                Try broadening the filters or clearing them to see the full{" "}
                {activeTab} event list again.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/7 px-4 py-4 text-left shadow-[0_16px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/58">
        {label}
      </p>
      <p className="mt-2 font-gill-sans text-3xl text-white">{value}</p>
      <p className="mt-1 text-sm text-white/68">{detail}</p>
    </div>
  );
}

type FilterSelectOption = {
  value: string;
  label: string;
};

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: FilterSelectOption[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none focus:border-yellow-300 focus:ring-3 focus:ring-yellow-300/30"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-neutral-950 text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function uniqueValues(values: Array<string | undefined>) {
  return [
    ...new Set(values.filter((value): value is string => Boolean(value))),
  ].sort((left, right) => left.localeCompare(right));
}

function withSelectedOption(options: string[], selectedValue: string) {
  const baseOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  if (
    selectedValue !== "all" &&
    selectedValue.length > 0 &&
    !options.includes(selectedValue)
  ) {
    baseOptions.unshift({ value: selectedValue, label: selectedValue });
  }

  return [{ value: "all", label: "All" }, ...baseOptions];
}

function withSelectedLabeledOption(
  options: FilterSelectOption[],
  selectedValue: string
) {
  const baseOptions = [...options];

  if (
    selectedValue !== "all" &&
    selectedValue.length > 0 &&
    !options.some((option) => option.value === selectedValue)
  ) {
    baseOptions.unshift({ value: selectedValue, label: selectedValue });
  }

  return [{ value: "all", label: "All" }, ...baseOptions];
}

function labelForOption(options: FilterSelectOption[], value: string) {
  return options.find((option) => option.value === value)?.label ?? value;
}

function uniqueMonthOptions(events: Event[]) {
  const monthEntries = new Map<string, string>();

  for (const event of events) {
    const value = getEventMonthValue(event.startTime);

    if (!value || monthEntries.has(value)) {
      continue;
    }

    monthEntries.set(
      value,
      new Date(event.startTime as string).toLocaleDateString("en-US", {
        timeZone: "America/New_York",
        month: "long",
        year: "numeric",
      })
    );
  }

  return [...monthEntries.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([value, label]) => ({ value, label }));
}

function getEventMonthValue(startTime?: string) {
  if (!startTime) {
    return null;
  }

  const date = new Date(startTime);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}

function getEventPriceBucket(admissionPrice?: string): EventPrice {
  if (!admissionPrice) {
    return "free";
  }

  return admissionPrice.toLowerCase().includes("free") ? "free" : "paid";
}
