import { useState, useEffect } from "react";
import type { Asset, Group } from "../../services/asset-panda/types";

import { mockAssets } from "../../../testing";

type UseSearch = (q: string) => {
  isLoading: boolean,
  assets: Asset[],
  groups: Group[],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useSearch: UseSearch = (q) => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setAssets(mockAssets as never[] as Asset[]);
      setIsLoading(false);
    }, 1000);
  }, []);

  return { assets, isLoading, groups: [] };
};

export { useSearch };
