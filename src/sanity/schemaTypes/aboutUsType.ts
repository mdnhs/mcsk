import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const aboutUsType = defineType({
  name: "aboutUs",
  title: "About Us",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
});
