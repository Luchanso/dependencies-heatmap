import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    projects(names: [String], dependencies: [String]): [Project]
  }

  type Dependency {
    name: String
    version: String
  }

  type Project {
    name: String
    dependencies: [Dependency]
  }
`;
