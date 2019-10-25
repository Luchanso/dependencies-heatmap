import { IResolvers } from "graphql-tools";
import { DataSources } from "./datasources";

type Context = {
  dataSources: DataSources;
};

// const btoa = (source: string) => Buffer.from(source).toString("base64");

export const resolvers: IResolvers<any, any> = {
  Query: {
    getDependenciesVersion: async (
      _,
      args: {
        dependencies: string[];
        registry?: string;
      },
      { dataSources }: Context
    ) => {
      return await dataSources.npm.getLastVersions(
        args.dependencies,
        args.registry
      );
    }
  }
};
