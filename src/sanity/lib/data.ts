import { cacheLife } from "next/cache";
import { client } from "./client";
import { sanityFetch } from "./live";
import {
  ABOUT_US_QUERY,
  EVENT_QUERY,
  PAST_EVENTS_QUERY,
  PRODUCTS_QUERY,
  UPCOMING_EVENTS_QUERY,
  MEMBERS_QUERY,
} from "./queries";

export async function getAboutUs() {
  "use cache";
  cacheLife("days");

  const { data } = await sanityFetch({ query: ABOUT_US_QUERY });
  return data;
}

export async function getMembers() {
  "use cache";
  cacheLife("days");

  const { data } = await sanityFetch({ query: MEMBERS_QUERY });
  return data;
}

export async function getUpcomingEvents() {
  "use cache";
  cacheLife("hours");

  const { data } = await sanityFetch({ query: UPCOMING_EVENTS_QUERY });
  return data;
}

export async function getPastEvents() {
  "use cache";
  cacheLife("hours");

  const { data } = await sanityFetch({ query: PAST_EVENTS_QUERY });
  return data;
}

export async function getProducts() {
  "use cache";
  cacheLife("days");

  const { data } = await sanityFetch({ query: PRODUCTS_QUERY });
  return data;
}

export async function getEvent(slug: string) {
  "use cache";
  cacheLife("hours");

  const { data } = await sanityFetch({
    query: EVENT_QUERY,
    params: { slug },
  });

  return data;
}

export async function getEventSlugs() {
  "use cache";
  cacheLife("hours");

  return client.fetch<Array<{ slug: { current: string } }>>(
    `*[_type == "event" && defined(slug.current)]{ slug }`
  );
}

export async function getSitemapEvents() {
  "use cache";
  cacheLife("hours");

  return client.fetch<
    Array<{
      slug: { current: string };
      _updatedAt: string;
    }>
  >(
    `*[_type == "event" && defined(slug.current)]{
      slug,
      _updatedAt
    }`
  );
}
