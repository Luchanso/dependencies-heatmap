import { Project } from "../../utils/projects-parser";

const getRandomInt = (min: number, max: number) =>
  min + Math.floor(Math.random() * max);

const getRandomVersion = () =>
  `v${getRandomInt(1, 30)}.${getRandomInt(1, 30)}.${getRandomInt(1, 30)}`;

const getRandomReactVersion = () =>
  `v${getRandomInt(15, 16)}.${getRandomInt(1, 20)}.${getRandomInt(1, 20)}}`;

const getRandomDependenciesList = (dependencies: string[]) =>
  dependencies.reduce((prev, dependency) => ({
    ...prev,
    [dependency]: getRandomVersion()
  }), {} as { [key: string]: string });

const getRandomProjectData = (projects: string[], dependencies: string[]) =>
  projects.map(project => ({
    name: project,
    dependencies: {
      ...getRandomDependenciesList(dependencies),
      react: getRandomReactVersion()
    } as { [key: string]: string }
  }));

const dependencies = ["arui-scripts", "arui-feather", "arui-private"];
const projects = ["corp-dash", "corp-payment", "corp-list", "corp-paylist"];

export const data: Project[] = getRandomProjectData(projects, dependencies);