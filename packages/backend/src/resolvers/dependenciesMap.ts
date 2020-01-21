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
    dependenciesFilter?: string[];
  },
  { dataSources }: Context
) => {
  const { dependenciesFilter, gitUrls } = args;
  const result = await dataSources.git.getDependencies(gitUrls);

  if (dependenciesFilter) {
    return result.map(createFilterByDependencies(dependenciesFilter));
  }

  return result;
};
