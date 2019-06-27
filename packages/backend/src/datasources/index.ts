import { GitApi } from "./git";
import { NpmApi } from "./npm";

export const dataSources = () => ({
  git: new GitApi(),
  npm: new NpmApi()
});

export type DataSources = ReturnType<typeof dataSources>;
