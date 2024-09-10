import { createRoute } from "@tanstack/react-router";

import { routePaths } from "../config";
import { rootRoute } from "../root/Root.route";
import { GameComponent } from "./Game.component";

export const gameRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routePaths.game,
  component: GameComponent,
});
