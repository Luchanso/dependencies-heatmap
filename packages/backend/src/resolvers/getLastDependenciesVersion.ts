import { Context } from "../resolvers";

export const getLastDependenciesVersion = async (
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
};
