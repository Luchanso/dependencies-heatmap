import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    # Дай мне актуальную версию зависимостей
    getDependenciesVersion(
      dependencies: [String]!
      registry: String
    ): [Dependency]

    getDependenciesJsonFromGit(

    ): [Dependency]
  }

  type Dependency {
    name: String
    latestVersion: String
  }
`;
