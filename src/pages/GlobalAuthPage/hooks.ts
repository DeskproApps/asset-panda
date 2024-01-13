import { useState, useCallback } from "react";
import { useDeskproAppClient } from "@deskpro/app-sdk";
import type { Maybe } from "../../types";

type Result = {
  isLoading: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any,
  onLogin: () => void,
};

type UseGlobalSignIn = () => Result;

const useGlobalSignIn: UseGlobalSignIn = () => {
  const { client } = useDeskproAppClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<Maybe<any>>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLogin = useCallback(() => {
    if (!client) {
      return;
    }

    setIsLoading(true);

    new Promise((resolve) => setTimeout(resolve, 1000))
      .then((user) => setUser(user))
      .finally(() => setIsLoading(false))
  }, [client]);

  return { user, onLogin, isLoading };
};

export { useGlobalSignIn };
