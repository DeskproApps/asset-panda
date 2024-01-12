import { useSetTitle, useRegisterElements } from "../../hooks";
import { Link } from "../../components";
import type { FC } from "react";

const LinkPage: FC = () => {
  useSetTitle("Link Assets");

  useRegisterElements(({ registerElement }) => {
    registerElement("refresh", { type: "refresh_button" });
    registerElement("home", {
      type: "home_button",
      payload: { type: "changePage", path: "/home" },
    });
  });

  return (
    <Link/>
  );
};

export { LinkPage };
