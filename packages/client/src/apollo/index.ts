import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers } from './resolvers';

type Cache = {};

export function useApolloClientForProvider(): [ApolloClient<Cache>, boolean] {
  const cache = new InMemoryCache();

  const client = new ApolloClient<Cache>({
    cache,
    uri: process.env.REACT_APP_BACKEND_URL,
    resolvers
  });

  const isLoading = false;

  return [client, isLoading];
}
