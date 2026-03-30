import { defineQuery } from "next-sanity";

export const EVENT_QUERY = defineQuery(`
  *[_type == "event" && slug.current == $slug][0] {
    ...,
  }
`);

export const EVENTS_QUERY = defineQuery(`
  *[_type == "event" && defined(slug.current) && defined(startTime)] {
    ...,
  } | order(startTime desc)
`);

export const UPCOMING_EVENTS_QUERY = defineQuery(`
  *[_type == "event" && defined(slug.current) && defined(startTime) && endTime >= now()] {
    ...,
  } | order(startTime asc)
`);

export const PAST_EVENTS_QUERY = defineQuery(`
  *[_type == "event" && defined(slug.current) && defined(startTime) && endTime < now()] {
    ...,
  } | order(startTime desc)
`);

export const ABOUT_US_QUERY = defineQuery(`
  *[_type == "aboutUs"][0] {
    title,
    body
  }
`);

export const MEMBERS_QUERY = defineQuery(`
  *[_type == "member"] {
    _id,
    name,
    subtitle,
    position,
    image,
    imageAltText,
    link
  } | order(position asc)
`);

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] {
    _id,
    name,
    subtitle,
    position,
    image,
    imageAltText,
    link
  } | order(position asc)
`);
