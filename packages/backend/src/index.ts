import { ApolloServer } from "apollo-server";
import { dataSources } from "./datasources";
import { mocks } from "./mocks";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { isDevelopment } from "./utils";
import logger from "./utils/logger";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: isDevelopment,
  dataSources
});

server.listen().then(({ url }) => {
  logger.info(`🚀  Server ready at ${url}`);
});
