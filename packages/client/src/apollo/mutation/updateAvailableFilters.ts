import debug from "debug";
import { setItem, STORE_KEYS } from "../../localStorage";
import { BaseResolver } from "../resolvers";

const log = {
  updateAvailableFilters: debug("apollo:mutation:updateAvailableFilters")
};

export const updateAvailableFilters: BaseResolver<{ filters: string[]; }> = (
  _,
  { filters },
  { cache }
) => {
  log.updateAvailableFilters("filters", filters);
  setItem(STORE_KEYS.availableFilters, filters);
  log.updateAvailableFilters("updated");

  cache.writeData({ data: { availableFilters: filters } });
};
