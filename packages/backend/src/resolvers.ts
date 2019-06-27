export const resolvers = {
  Query: {
    projects: (_, { names }: { names: string[] }) =>
      names.reduce(
        (prev, next) => [
          ...prev,
          {
            name: next,
            dependencies: [
              {
                name: "arui-feather",
                version: "21.3.2"
              },
              {
                name: "react",
                version: "16.8.3"
              }
            ]
          }
        ],
        []
      )
  }
};
