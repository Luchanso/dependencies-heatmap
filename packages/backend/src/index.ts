import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { mocks } from './mocks';
import { isDevelopment } from "./utils";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: isDevelopment
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
