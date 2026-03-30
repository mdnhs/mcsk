import { type SchemaTypeDefinition } from "sanity";
import { aboutUsType } from "./aboutUsType";
import { blockContentType } from "./blockContentType";
import { eventType } from "./eventType";
import { memberType } from "./memberType";
import { productType } from "./productType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, eventType, memberType, productType, aboutUsType],
};
