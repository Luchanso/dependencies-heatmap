import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "graphql.macro";
import debug from "debug";

const log = {
  useFilters: debug("hooks:useFilters")
};


const UPDATE_FILTERS_QUERY = gql`
  mutation updateFilters($filters: [String]!) {
    updateFilters(filters: $filters) @client
  }
`;

const UPDATE_AVAILABLE_FILTERS_QUERY = gql`
  mutation updateAvailableFilters($filters: [String]!) {
    updateAvailableFilters(filters: $filters) @client
  }
`;

const GET_FILTERS_QUERY = gql`
  {
    filters @client(always: true)
  }
`;

const GET_AVAILABLE_FILTERS_QUERY = gql`
  {
    availableFilters @client(always: true)
  }
`;

export function useFilters() {
  log.useFilters('called');
  const [updateFilters] = useMutation<any, { filters: string[] }>(
    UPDATE_FILTERS_QUERY
  );
  const [updateAvailableFilters] = useMutation<any, { filters: string[] }>(
    UPDATE_AVAILABLE_FILTERS_QUERY
  );
  const { data: dataFilters } = useQuery<{ filters: string[] }>(GET_FILTERS_QUERY);
  const { data: dataAvailableFilters } = useQuery<{ availableFilters: string[] }>(
    GET_AVAILABLE_FILTERS_QUERY
  );
  // TODO: refactoring here
  const filters = dataFilters?.filters || undefined;
  const availableFilters = dataAvailableFilters?.availableFilters;

  function setFilters(filters: string[]) {
    updateFilters({
      variables: {
        filters
      }
    });
  }

  function setAvailableFilters(filters: string[]) {
    updateAvailableFilters({
      variables: {
        filters
      }
    });
  }

  const result = { filters, availableFilters, setFilters, setAvailableFilters };

  log.useFilters('result', result);

  return result;
}
