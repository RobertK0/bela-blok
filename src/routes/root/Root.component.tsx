import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Provider } from "jotai";
import { ErrorBoundary } from "react-error-boundary";

import { GlobalError } from "../../components/Error/GlobalError.component";
import { store } from "../../store";

export const RootComponent = () => {
  return (
    <ErrorBoundary FallbackComponent={GlobalError}>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </ErrorBoundary>
  );
};
