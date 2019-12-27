import { loader } from "graphql.macro";
import { useMutation } from "@apollo/react-hooks";

export const mutation = loader("./addDependency.gql");

export function useDependenciesUpdater() {
  const [addDependency] = useMutation<any, { url: string }>(mutation);

  function handleAdd(dependency: string) {
    addDependency({
      variables: {
        url: dependency
      }
    });
  }

  return [handleAdd] as const;
}
