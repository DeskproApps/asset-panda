import { useGlobalSignIn } from "./hooks";
import { GlobalAuth } from "../../components";
import type { FC } from "react";

const GlobalAuthPage: FC = () => {
  const { user, isLoading, onLogin } = useGlobalSignIn();

  return (
    <GlobalAuth
      user={user}
      isLoading={isLoading}
      onLogin={onLogin}
    />
  );
};

export { GlobalAuthPage };
