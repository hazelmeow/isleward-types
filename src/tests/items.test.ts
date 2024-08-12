import { Item } from "../items";
import { replaceNullWithUndefined } from "../utils";
import { describe, test } from "vitest";

// Not exhaustive, we should make a curated version sometime
// The schema was originally tested with a ton of items from Islebuilds though
import itemsJson from "./items.json";

describe("item test cases", () => {
  const itemCases = (itemsJson as string[]).map((v, i) => [i, JSON.parse(v)]);

  test.each(itemCases)("should parse case %i", (idx, item) => {
    const itemWithoutNulls = replaceNullWithUndefined(item);
    Item.strict().parse(itemWithoutNulls);
  });
});
