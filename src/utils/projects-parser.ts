export type Project = {
  name: string;
  dependencies: {
    [key: string]: string;
  };
};

export const projectsToTable = (projects: Project[]) =>

  projects.reduce((prev, project) => {
    const result = {
      ...prev,
      head: [
        ...prev.head,
        project.name
      ],
      body: {
        ...prev.body,

      }
    }

    return result;
  }, {
    head: [],
    body: {}
  });
