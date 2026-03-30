import type { Metadata } from "next";
import AllEvents from "@/components/all-events";

export const metadata: Metadata = {
  title: "Events",
  description: "View all events",
  alternates: {
    canonical: "https://mcsk-khulna.vercel.app/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <AllEvents />
    </>
  );
}
