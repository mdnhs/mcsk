import { CalendarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const eventType = defineType({
  icon: CalendarIcon,
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
    }),
    defineField({
      name: "startTime",
      type: "datetime",
      description:
        "This input uses YOUR local time zone and displays the event on the website in EASTERN time zone. For example - if YOU are in Pacific time, enter 10 AM if the event is 1 PM in EASTERN time.",
    }),
    defineField({
      name: "endTime",
      type: "datetime",
      description:
        "This input uses YOUR local time zone and displays the event on the website in EASTERN time zone. For example - if YOU are in Pacific time, enter 10 AM if the event is 1 PM in EASTERN time.",
    }),
    defineField({
      name: "venue",
      type: "string",
    }),
    defineField({
      name: "city",
      type: "string",
    }),
    defineField({
      name: "state",
      type: "string",
      description: "ex: MD",
    }),
    defineField({
      name: "admissionPrice",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      type: "image",
    }),
    defineField({
      name: "mainImageAltText",
      type: "string",
    }),
    defineField({
      name: "details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "eventDetailsButtonText",
      type: "string",
      description: "Text for button on event details page",
    }),
    defineField({
      name: "eventDetailsButtonURL",
      type: "url",
      description: "URL for button on event details page",
    }),
  ],
  preview: {
    select: {
      name: "name",
      venue: "venue",
      startTime: "startTime",
      mainImage: "mainImage",
    },
    prepare({ name, venue, startTime, mainImage }) {
      const nameFormatted = name || "Untitled event";
      const dateFormatted = startTime
        ? new Date(startTime).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        : "No date";

      return {
        title: name ? `${nameFormatted}` : nameFormatted,
        subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
        media: mainImage || CalendarIcon,
      };
    },
  },
});
