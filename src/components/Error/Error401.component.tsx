import { GenericErrorPage } from "./GenericErrorPage.component";
import { ErrorPageProps } from "./GlobalError.component";

export function Error401({ resetErrorBoundary }: ErrorPageProps) {
  return (
    <GenericErrorPage
      title={"Error 401"}
      buttonLabel={"Go back"}
      resetErrorBoundary={resetErrorBoundary}
    />
  );
}
