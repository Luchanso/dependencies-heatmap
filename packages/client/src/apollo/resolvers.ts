import { ApolloClient, InMemoryCache, Resolvers } from "apollo-boost";
import { FragmentMap } from "apollo-utilities";
import { FieldNode } from "graphql";
import { addDependency } from "./mutation/addDependency";

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
  TContext extends Context = Context,
  TRootValue = any,
  TInfo extends Info = Info
> = (
  rootValue: TRootValue,
  args: TArgs,
  context: TContext,
  info?: TInfo
) => any;

export const resolvers: Resolvers = {
  Mutation: {
    addDependency
  }
};
