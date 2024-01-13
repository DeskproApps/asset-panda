import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "@deskpro/app-sdk";
import {
  useSetTitle,
  useLinkedAssets,
  useRegisterElements,
} from "../../hooks";
import { Home } from "../../components";
import type { FC } from "react";
import type { Asset } from "../../services/asset-panda/types";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const { isLoading, assets } = useLinkedAssets();

  const onNavigateToView = useCallback((assetId: Asset["id"]) => {
    navigate(`/view/${assetId}`);
  }, [navigate]);

  const onNavigateToLink = useCallback(() => navigate("/link"), [navigate]);

  useSetTitle("AssetPanda");

  useRegisterElements(({ registerElement }) => {
    registerElement("refresh", { type: "refresh_button" });
  });

  if (isLoading) {
    return (
      <LoadingSpinner/>
    );
  }

  return (
    <Home
      assets={assets}
      onNavigateToLink={onNavigateToLink}
      onNavigateToView={onNavigateToView}
    />
  );
};

export { HomePage };
