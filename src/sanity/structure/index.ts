import { CalendarIcon, PackageIcon, UserIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      S.documentTypeListItem("event").title("All Events").icon(CalendarIcon),
      S.divider(),
      S.listItem()
        .title("Upcoming Events")
        .schemaType("event")
        .icon(CalendarIcon)
        .child(
          S.documentList().title("Upcoming Events").filter("startTime >= now()")
        ),
      S.listItem()
        .title("Past Events")
        .schemaType("event")
        .icon(CalendarIcon)
        .child(
          S.documentList().title("Past Events").filter("startTime < now()")
        ),
      S.divider(),
      S.documentTypeListItem("aboutUs").title("About Us").icon(UserIcon),
      S.documentTypeListItem("member").title("Members").icon(UserIcon),
      S.documentTypeListItem("product").title("Products").icon(PackageIcon),
    ]);
