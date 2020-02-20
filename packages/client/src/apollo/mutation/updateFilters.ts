import debug from "debug";
import { setItem, STORE_KEYS } from "../../localStorage";
import { BaseResolver } from "../resolvers";

const log = {
  updateFilters: debug("apollo:mutation:updateFilters")
};

export const updateFilters: BaseResolver<{ filters: string[]; }> = (
  _,
  { filters },
  { cache }
) => {
  log.updateFilters("filters", filters);
  setItem(STORE_KEYS.filters, filters);
  log.updateFilters("updated");

  cache.writeData({ data: { filters } });
};
