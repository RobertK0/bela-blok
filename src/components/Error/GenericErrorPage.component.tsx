import { useNavigate } from "@tanstack/react-router";

// import { store, workspaceNameAtom } from '@store';

type GenericErrorPageProps = {
  title: string;
  description?: string;
  buttonLabel: string;
  resetErrorBoundary?: () => void;
};

export function GenericErrorPage({
  title,
  buttonLabel,
  description,
  resetErrorBoundary,
}: GenericErrorPageProps) {
  const navigate = useNavigate();

  return <></>;
}
