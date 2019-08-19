import { IResolvers } from "graphql-tools";
import { DataSources } from "./datasources";

type Context = {
  dataSources: DataSources;
};

const btoa = (source: string) => Buffer.from(source).toString("base64");

export const resolvers: IResolvers<any, any> = {
  Query: {
    projects: async (
      _,
      args: { gitUrls: string[]; dependencies: string[] },
      { dataSources }: Context
    ) => {
      const { gitUrls } = args;

      const resultPromises = gitUrls
        .map(url => {
          const name = btoa(url);

          return {
            promise: dataSources.git.update({
              name,
              url
            }),
            url,
            name
          };
        })
        .map(async ({ promise, url, name }) => {
          await promise;
          const packages = await dataSources.npm.getDependencies(name);

          return {
            url,
            name,
            packages
          };
        });

      const result = await Promise.all(resultPromises);
      result
        .reduce((prev, { packages }) => prev.concat(packages), [] as {
          dependencie: string;
          version: string;
        }[])
        .forEach(item => console.log(item));

      return null;
    }
  }
};
