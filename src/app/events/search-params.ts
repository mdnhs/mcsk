import { parseAsString, parseAsStringLiteral } from "nuqs/server";

export const eventTabOptions = ["upcoming", "past"] as const;
export const eventPriceOptions = ["all", "free", "paid"] as const;

export const eventTabParser = parseAsStringLiteral(eventTabOptions);
export const eventPriceParser = parseAsStringLiteral(eventPriceOptions);

export const eventFilterParsers = {
  q: parseAsString,
  city: parseAsString,
  venue: parseAsString,
  month: parseAsString,
  price: eventPriceParser,
};

export const eventSearchParams = {
  tab: eventTabParser.withDefault("upcoming"),
  q: parseAsString.withDefault(""),
  city: parseAsString.withDefault("all"),
  venue: parseAsString.withDefault("all"),
  month: parseAsString.withDefault("all"),
  price: eventPriceParser.withDefault("all"),
};
