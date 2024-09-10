import { createRoute } from "@tanstack/react-router";

import { routePaths } from "../config";
import { HomeComponent } from "./Home.component";
import { rootRoute } from "../root/Root.route";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routePaths.home,
  component: HomeComponent,
});
