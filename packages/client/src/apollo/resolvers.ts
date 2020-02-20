import { ApolloClient, InMemoryCache, Resolvers } from "apollo-boost";
import { FragmentMap } from "apollo-utilities";
import { FieldNode } from "graphql";
import { add } from "./mutation/add";
import { projects } from "./query/projects";
import { availableFilters } from "./query/availableFilters";
import { updateFilters } from "./mutation/updateFilters";
import { updateAvailableFilters } from "./mutation/updateAvailableFilters";
import { filters } from "./query/filters";

export type Context = {
  cache: InMemoryCache;
  getCacheKey: { __typename: any; id: any };
  client: ApolloClient<any>;
};

export type Info = {
  field: FieldNode;
  fragmentMap: FragmentMap;
};

export type BaseResolver<
  TArgs = any,
  TReturn = any,
  TContext extends Context = Context,
  TRootValue = any,
  TInfo extends Info = Info
> = (
  rootValue: TRootValue,
  args: TArgs,
  context: TContext,
  info?: TInfo
) => TReturn;

export const resolvers: Resolvers = {
  Mutation: {
    add,
    updateFilters,
    updateAvailableFilters
  },
  Query: {
    projects,
    availableFilters,
    filters
  }
};
