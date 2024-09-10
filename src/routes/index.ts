import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./root/Root.route";
import { homeRoute } from "./home/Home.route";
import { Error404 } from "../components/Error/Error404.component";
import { addPlayersRoute } from "./addPlayers/AddPlayers.route";
import { gameRoute } from "./game/Game.route";

export const routeTree = rootRoute.addChildren([
  homeRoute,
  addPlayersRoute,
  gameRoute,
]);

export const router = createRouter({
  routeTree,
  // context: {
  //   queryClient,
  //   auth: { isAuthenticated: false },
  // },
  defaultNotFoundComponent: Error404,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
