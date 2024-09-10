import { useEffect } from "react";
import { FallbackProps } from "react-error-boundary";

import { Error401 } from "./Error401.component";
// import { captureException } from '@sentry/react';
import { Error500 } from "./Error500.component";

export type ErrorPageProps = {
  resetErrorBoundary: () => void;
};

export function GlobalError({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  useEffect(() => {
    if (!error) return;

    try {
      // captureException(error);
    } catch (err) {
      console.error(err, error);
    }
  }, [error]);

  return <Error500 resetErrorBoundary={resetErrorBoundary} />;
}
