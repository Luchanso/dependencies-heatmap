import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-boost";
import { loader } from "graphql.macro";
import gql from "graphql-tag";

export type DependenciesMapTable = {
  loading: boolean;
  error?: ApolloError | undefined;
  headers?: string[];
  columns?: string[][];
  firstColumn?: string[];
};

type Project = {
  gitUrl: string;
  dependencies: {
    name: string;
    version: string;
  }[];
};

export const query = loader("./dependenciesMap.gql");

const projectNameSelector = (gitUrl: string) =>
  gitUrl.substr(gitUrl.lastIndexOf("/") + 1).replace(".git", "");

const uniquePush = <T>(array: T[], item: T) => {
  if (array.indexOf(item) === -1) {
    return [...array, item];
  }

  return array;
};

const union = <T>(array1: T[], array2: T[]) => [
  ...Array.from(new Set([...array1, ...array2]))
];

const getAllDependenciesName = (dependencies: { name: string; version: string }[]) =>
  dependencies.reduce((result, item) => [...result, item.name], [] as string[]);

/**
 * Get all unique dependencies from data
 *
 * @param data
 */
const firstColumnSelector = (data: Project[]): string[] =>
  data.reduce(
    (result, project) =>
      union(result, getAllDependenciesName(project.dependencies)),
    [] as string[]
  );

const dataTableSelector = (
  data: Project[],
  libs: string[]
): { headers: string[]; columns: string[][] } =>
  data.reduce(
    (result, project) => {
      const column = libs.map(libName => {
        const dep = project.dependencies.find(
          dependency => dependency.name === libName
        );

        if (!dep) {
          return "-";
        }

        return dep.version;
      });

      return {
        headers: [...result.headers, projectNameSelector(project.gitUrl)],
        columns: [...result.columns, column]
      };
    },
    { headers: [] as string[], columns: [] as string[][] }
  );

const QUERY = gql`
  query($projects: [String]!, $filteredLibs: [String]) {
    projects @client @export(as: "projects")
    filteredLibs @client @export(as: "filteredLibs")

    dependenciesMap(gitUrls: $projects, dependenciesFilter: $filteredLibs) {
      gitUrl
      dependencies {
        name
        version
      }
    }
  }
`;

export function useDependenciesMapTable(): DependenciesMapTable {
  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      projects: ["https://github.com/Luchanso/dota-ai-pick.git"]
    }
  });
  const { dependenciesMap } = data || {};

  if (loading) {
    return {
      loading
    };
  }

  if (error) {
    return {
      loading,
      error
    };
  }

  const firstColumn = firstColumnSelector(dependenciesMap);
  const { headers, columns } = dataTableSelector(dependenciesMap, firstColumn);

  return {
    loading,
    error,
    headers,
    columns,
    firstColumn
  };
}
