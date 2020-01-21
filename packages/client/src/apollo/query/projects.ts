import { BaseResolver } from "../resolvers";
import { STORE_KEYS, getItem } from "../../localStorage";

export const projects: BaseResolver = () => {
  const projects = getItem<string[]>(STORE_KEYS.projects) || null;

  return projects;
};
