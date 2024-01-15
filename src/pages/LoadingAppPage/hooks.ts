import { useMemo } from "react";
import get from "lodash/get";
import size from "lodash/size";
import { useNavigate } from "react-router-dom";
import {
  useDeskproLatestAppContext,
  useInitialisedDeskproAppClient,
} from "@deskpro/app-sdk";
import type { UserContext } from "../../types";

type UseCheckAuth = () => void;

const useCheckAuth: UseCheckAuth = () => {
  const navigate = useNavigate();
  const { context } = useDeskproLatestAppContext() as { context: UserContext };
  const dpUserId = useMemo(() => get(context, ["data", "user", "id"]), [context]);


  useInitialisedDeskproAppClient((client) => {
    if (!dpUserId) {
      return;
    }

    Promise.resolve(client)
      .then((entityIds) => navigate(size(entityIds) ? "/home" : "/link"))
      .catch(() => navigate("/login"))
  }, [dpUserId]);
};

export { useCheckAuth };
