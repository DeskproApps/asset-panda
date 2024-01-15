import { useParams } from "react-router-dom";
import { LoadingSpinner } from "@deskpro/app-sdk";
import { useSetTitle, useRegisterElements, useAsset } from "../../hooks";
import { View } from "../../components";
import type { FC } from "react";

const ViewPage: FC = () => {
  const { assetId } = useParams();
  const { asset, isLoading } = useAsset(assetId);

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

  if (isLoading) {
    return (
      <LoadingSpinner/>
    );
  }

  return (
    <View asset={asset}/>
  );
};

export { ViewPage };
