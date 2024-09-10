// import { QueryClient } from '@tanstack/react-query';
// import { createRootRouteWithContext, redirect } from '@tanstack/react-router';

// import { store, userAtom, workspaceNameAtom } from '@store';

// import { currentUserQueryConfig } from '@assets/apiClient/querySettings/user';

// import type { BeforeLoadParams } from '@utils/routes/beforeLoad/types';

import { RootComponent } from "./Root.component";
import { routePaths } from "../config";
import { createRootRouteWithContext } from "@tanstack/react-router";

type AuthContext = {
  isAuthenticated: boolean;
};

export type RouteContext = {};

export const rootRoute = createRootRouteWithContext<RouteContext>()(
  {
    component: RootComponent,
  }
);
