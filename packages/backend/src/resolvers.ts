import { IResolvers } from "graphql-tools";
import { DataSources } from "./datasources";
import { getLastDependenciesVersion } from "./resolvers/getLastDependenciesVersion";
import { getDependenciesMapFromGit } from "./resolvers/getDependenciesMapFromGit";

export type Context = {
  dataSources: DataSources;
};

// const btoa = (source: string) => Buffer.from(source).toString("base64");

export const resolvers: IResolvers<any, any> = {
  Query: {
    getLastDependenciesVersion,
    getDependenciesMapFromGit
  }
};
