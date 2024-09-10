import { GenericErrorPage } from "./GenericErrorPage.component";

export function Error404() {
  return (
    <GenericErrorPage title={"Error 404"} buttonLabel={"Go back"} />
  );
}
