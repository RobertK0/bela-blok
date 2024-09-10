import { createRoute } from "@tanstack/react-router";

import { routePaths } from "../config";
import { rootRoute } from "../root/Root.route";
import { AddPlayersComponent } from "./AddPlayers.component";

export const addPlayersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routePaths.addPlayers,
  component: AddPlayersComponent,
});
