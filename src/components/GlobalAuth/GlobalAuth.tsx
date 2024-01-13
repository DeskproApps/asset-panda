import { Button } from "../common";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any,
  isLoading: boolean,
  onLogin: () => void,
};

const GlobalAuth: FC<Props> = ({ isLoading, onLogin }) => {
  return (
    <>
      <Button
        type="button"
        text="Sign-In"
        icon={faSignIn}
        intent="secondary"
        loading={isLoading}
        onClick={onLogin}
      />
    </>
  );
};

export { GlobalAuth };
