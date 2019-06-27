import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { mocks } from './mocks';
import { isDevelopment } from "./utils";
import { dataSources } from './datasources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: isDevelopment,
  dataSources
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
