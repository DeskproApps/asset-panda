import { useSetTitle, useRegisterElements } from "../../hooks";
import { View } from "../../components";
import type { FC } from "react";

const ViewPage: FC = () => {
  useSetTitle("Asset details");

  useRegisterElements(({ registerElement }) => {
    registerElement("refresh", { type: "refresh_button" });
    registerElement("home", {
      type: "home_button",
      payload: { type: "changePage", path: "/home" },
    });
    registerElement("menu", {
      type: "menu",
      items: [{
        title: "Unlink Asset",
        payload: { type: "unlink" },
      }],
    });
  });

  return (
    <View/>
  );
};

export { ViewPage };
