import { BaseResolver } from "../resolvers";

const DEPENDENCY_KEY = 'dependency';

export const getDependencies = () =>
  JSON.parse(localStorage.getItem(DEPENDENCY_KEY) || '{}');

export const setDependencies = (dependencies: any) =>
  localStorage.setItem(DEPENDENCY_KEY, dependencies);

export const addDependency: BaseResolver<{ url: string }> = (root, { url }) => {
  // TODO: написать функцию которая кладет в стор по определенному адресу данные и достаёт их
  // localStorage
  const dependencies = getDependencies();
}
