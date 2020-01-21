import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    # Дай мне актуальную версию зависимостей
    getLastDependenciesVersion(
      dependencies: [String]!
      registry: String
    ): [Dependency]

    dependenciesMap(
      gitUrls: [String]!
      dependenciesFilter: [String]
    ): [DependenciesMap]
  }

  type DependenciesMap {
    gitUrl: String
    dependencies: [Dependency]
  }

  type Dependency {
    name: String
    version: String
  }
`;
