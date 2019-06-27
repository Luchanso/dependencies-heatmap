import { IResolvers } from "graphql-tools";
// import { DataSources } from "./datasources";

// type Context = {
//   dataSources: DataSources
// }

export const resolvers: IResolvers<any, any> = {
  Query: {
    projects: (
      _,
      args: { names: string[]; dependencies: string[] },
      { dataSources }
    ) => {
      return null;
    }
  }
};
