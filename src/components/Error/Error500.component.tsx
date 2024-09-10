import { GenericErrorPage } from "./GenericErrorPage.component";
import { ErrorPageProps } from "./GlobalError.component";

export function Error500({ resetErrorBoundary }: ErrorPageProps) {
  return (
    <GenericErrorPage
      title={"Error 500"}
      description={"Description"}
      buttonLabel={"Go back"}
      resetErrorBoundary={resetErrorBoundary}
    />
  );
}
