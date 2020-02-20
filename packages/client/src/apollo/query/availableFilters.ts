import { BaseResolver } from "../resolvers";
import debug from "debug";
import { getItem, STORE_KEYS } from "../../localStorage";

const log = {
  availableFilters: debug("resolvers:query:availableFilters")
};

export const availableFilters: BaseResolver = () => {
  log.availableFilters("called");

  return getItem<string[]>(STORE_KEYS.availableFilters) || null;
};
