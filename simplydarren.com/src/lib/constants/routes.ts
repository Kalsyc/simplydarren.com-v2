export interface RouteDetail {
  routeName: string;
  routePath: string;
}

export const routes: RouteDetail[] = [
  {routeName: "Home", routePath: ""},
  {routeName: "About", routePath: "about"},
  {routeName: "Resume", routePath: "resume"},
  {routeName: "Projects", routePath: "projects"},
]