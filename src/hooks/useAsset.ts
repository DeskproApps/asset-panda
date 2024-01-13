import { useState, useEffect } from "react";
import type { Maybe } from "../types";
import type { Asset } from "../services/asset-panda/types";

import { mockAssets } from "../../testing";

type UseAsset = (assetId?: Maybe<Asset["id"]>) => {
  asset: Asset,
  isLoading: boolean,
};

const useAsset: UseAsset = (assetId) => {
  const [asset, setAsset] = useState<Maybe<Asset>>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setAsset(mockAssets[assetId as never] as never);
      setIsLoading(false);
    }, 1000);
  }, [assetId]);

  return { asset: asset as Asset, isLoading };
};

export { useAsset };
