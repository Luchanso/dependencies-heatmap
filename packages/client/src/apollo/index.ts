import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers } from './resolvers';

type Cache = {};

export function useApolloClientForProvider(backendUrl: string | undefined): [ApolloClient<Cache>, boolean] {
  const cache = new InMemoryCache();

  const client = new ApolloClient<Cache>({
    cache,
    uri: backendUrl,
    resolvers
  });

  const isLoading = false;

  return [client, isLoading];
}
