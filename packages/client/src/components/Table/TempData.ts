import {
  ProjectDependencies,
  Projects
} from "../../utils/project-parser/projects-parser";

const getRandomInt = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min));

const getRandomVersion = () =>
  `v${getRandomInt(1, 30)}.${getRandomInt(1, 30)}.${getRandomInt(1, 30)}`;

const getRandomReactVersion = () =>
  `v${getRandomInt(15, 16)}.${getRandomInt(1, 20)}.${getRandomInt(1, 20)}`;

const getRandomDependenciesList = (dependencies: string[]) =>
  dependencies.reduce(
    (prev, dependency) => ({
      ...prev,
      [dependency]: Math.random() > 0.5 ? getRandomVersion() : undefined
    }),
    {} as ProjectDependencies
  );

const getRandomProjectData = (projects: string[], dependencies: string[]) =>
  projects.reduce(
    (state, project) => {
      return {
        ...state,
        [project]: {
          ...getRandomDependenciesList(dependencies),
          react: getRandomReactVersion()
        }
      };
    },
    {} as Projects
  );

export const dependencies = [
  "arui-scripts",
  "arui-feather",
  "arui-private",
  "react"
];
export const projects = [
  "corp-dash",
  "corp-payment",
  "corp-list",
  "corp-paylist"
];
export const tempData = getRandomProjectData(projects, dependencies);
