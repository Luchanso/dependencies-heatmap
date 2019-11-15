import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-boost";
import { loader } from "graphql.macro";

export type DependenciesMapTable = {
  loading: boolean;
  error?: ApolloError | undefined;
  headers?: string[];
  columns?: string[][];
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
  gitUrl.substr(gitUrl.lastIndexOf('/') + 1).replace('.git', '');

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

export function useDependenciesMapTable(
  projects: string[],
  libs: string[]
): DependenciesMapTable {
  const { loading, error, data } = useQuery(query, { variables: {
    projects,
    libs
  } });

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

  console.log(data);

  const { headers, columns } = dataTableSelector(data.dependenciesMap, libs);

  return {
    loading,
    error,
    headers,
    columns
  };
}
