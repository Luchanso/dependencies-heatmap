export type ProjectDependencies = Partial<{
  [key: string]: string;
}>;

export type Projects = {
  [key: string]: ProjectDependencies;
};

export const formatVersion = (version?: string) => version ? version : '-';

export const getProjectDependencieVersions = (
  projects: Projects,
  dependencieName: string
) =>
  Object.values(projects).reduce(
    (prev, curr) => [...prev, formatVersion(curr[dependencieName])],
    [] as string[]
  );

export const toTableHead = (projects: Projects) => Object.keys(projects);

export const toTableBody = (projects: Projects): string[][] => {
  const projectsDependencies = Object.values(projects);

  const allDependencies = Array.from(
    new Set(
      projectsDependencies.reduce(
        (prev, dependencies) => [...prev, ...Object.keys(dependencies)],
        [] as string[]
      )
    )
  );

  return allDependencies.reduce(
    (prev, curr) => [
      ...prev,
      [curr, ...getProjectDependencieVersions(projects, curr)]
    ],
    [] as string[][]
  );
};
