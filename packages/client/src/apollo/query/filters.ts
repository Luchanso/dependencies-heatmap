import { BaseResolver } from "../resolvers";
import debug from "debug";
import { getItem, STORE_KEYS } from "../../localStorage";

const log = {
  filters: debug("resolvers:query:filters")
};

export const filters: BaseResolver = () => {
  log.filters("called");

  return getItem<string[]>(STORE_KEYS.filters) || null;
};
