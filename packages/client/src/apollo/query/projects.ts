import qs from 'qs';
import { BaseResolver } from "../resolvers";
import { STORE_KEYS, getItem } from "../../localStorage";

export const projects: BaseResolver = () => {
  const projects = window.location.search
      ? qs.parse(window.location.search)
      : getItem<string[]>(STORE_KEYS.projects) || [];

  return projects;
};
