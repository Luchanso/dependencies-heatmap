import { Context } from "../resolvers";

const createFilterByDependencies = (dependenciesFilter: string[]) => (item: {
  gitUrl: string;
  dependencies: {
    name: string;
    version: string;
  }[];
}) => ({
  ...item,
  dependencies: item.dependencies.filter(dependency =>
    dependenciesFilter.includes(dependency.name)
  )
});

export const dependenciesMap = async (
  _,
  args: {
    gitUrls: string[];
    dependencies?: string[];
  },
  { dataSources }: Context
) => {
  const result = await dataSources.git.getDependencies(args.gitUrls);

  if (args.dependencies) {
    return result.map(createFilterByDependencies(args.dependencies));
  }

  return result;
};
