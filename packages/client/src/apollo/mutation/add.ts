import { BaseResolver } from "../resolvers";
import debug from "debug";
import { getItem, setItem, STORE_KEYS } from "../../localStorage";

const log = {
  addProjects: debug("apollo:mutation:add")
};

export const add: BaseResolver<{ url: string; }> = (
  _,
  { url }
) => {
  const projects = getItem<string[]>(STORE_KEYS.projects) || [];
  log.addProjects("url", url);

  projects.push(url);
  setItem(STORE_KEYS.projects, projects);

  log.addProjects("saved");
  log.addProjects("new projects", projects);
};
