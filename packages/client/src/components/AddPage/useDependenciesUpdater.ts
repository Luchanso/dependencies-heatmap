import { loader } from "graphql.macro";
import { useMutation } from "@apollo/react-hooks";

export const mutation = loader("./add.gql");

export function useDependenciesUpdater() {
  const [add] = useMutation<any, { url: string }>(mutation);

  function handleAdd(project: string) {
    add({
      variables: {
        url: project
      }
    });
  }

  return [handleAdd] as const;
}
