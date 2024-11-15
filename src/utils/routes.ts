export const routes = {
  homePage: '/',
  loginRegisterPage: '/loginregister',
  projectPage: (projectId: string) => `/project/${projectId}`,
};

export type RouteParams = {
  project: { projectId: string };
};
