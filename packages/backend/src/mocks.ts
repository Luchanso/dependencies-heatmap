const getRandomInt = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min));

const getRandomVersion = () =>
  Math.random() < 0.1 ? '-' : `${getRandomInt(1, 30)}.${getRandomInt(1, 30)}.${getRandomInt(1, 30)}`;

const projects = (parent, args: { names: string[]; dependencies: string[] }) =>
  args.names.map(projectName => ({
    name: projectName,
    dependencies: args.dependencies.map(dependencyName => ({
      name: dependencyName,
      version: getRandomVersion()
    }))
  }));

export const mocks = {
  Query: () => ({
    projects
  })
};
