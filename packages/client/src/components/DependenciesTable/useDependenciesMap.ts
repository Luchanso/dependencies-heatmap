import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-boost";
import gql from "graphql-tag";
import { loader } from "graphql.macro";
import debug from 'debug';
import { useFilters } from "../Filter/useFilters";

const log = {
  useDependenciesMapTable: debug('hooks:useDependenciesMapTable')
}

export type DependenciesMapTable = {
  loading: boolean;
  error?: ApolloError | undefined;
  headers?: string[];
  columns?: string[][];
  firstColumn?: string[];
  isEmpty?: boolean;
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

const union = <T>(array1: T[], array2: T[]) => [
  ...Array.from(new Set([...array1, ...array2]))
];

const getAllDependenciesName = (
  dependencies: { name: string; version: string }[]
) =>
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

function getCommon(list1: string[], list2: string[]) {
  const common = [];
  const total = [...list1, ...list2].sort();

  for (let index = 0; index < total.length; index += 1) {
    if (total[index] === total[index + 1]) {
      common.push(total[index]);
    }
  }

  return common;
}

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
  query($projects: [String]!) {
    projects @client(always: true) @export(as: "projects")

    dependenciesMap(gitUrls: $projects) {
      gitUrl
      dependencies {
        name
        version
      }
    }
  }
`;

export function useDependenciesMapTable(): DependenciesMapTable {
  log.useDependenciesMapTable('called');

  const { loading, error, data } = useQuery(QUERY);
  const { filters, availableFilters, setAvailableFilters } = useFilters();

  // TODO: refactor
  log.useDependenciesMapTable('filters', filters);
  log.useDependenciesMapTable('availableFilters', availableFilters);
  log.useDependenciesMapTable('data', data);
  log.useDependenciesMapTable('error', error);
  log.useDependenciesMapTable('loading', loading);

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

  if ((!data && !loading) || (data && data.projects.length === 0)) {
    return {
      loading,
      isEmpty: true
    };
  }

  const { dependenciesMap } = data;
  const firstColumn = firstColumnSelector(dependenciesMap);

  if (firstColumn && !availableFilters) {
    setAvailableFilters(firstColumn);
  }

  if (
    firstColumn &&
    availableFilters &&
    firstColumn.length !== availableFilters.length
  ) {
    setAvailableFilters(firstColumn);
  }

  const filteredFirstColumn =
    (filters && filters.length > 0 && getCommon(firstColumn, filters)) ||
    firstColumn;
  const { headers, columns } = dataTableSelector(dependenciesMap, firstColumn);

  const result = {
    loading,
    error,
    headers,
    columns,
    firstColumn: filteredFirstColumn
  };

  log.useDependenciesMapTable('result', result);

  return result;
}
