import { Metadata } from "next";
import AllEvents from "@/components/all-events";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events",
  description: "View all events",
  alternates: {
    canonical: "https://baltimorecorgis.com/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <AllEvents />
    </>
  );
}
