import { useState, useEffect } from "react";
import type { Asset } from "../services/asset-panda/types";

import { mockAssets } from "../../testing";

type UseLinkedAssets = () => {
  isLoading: boolean,
  assets: Asset[],
};

const useLinkedAssets: UseLinkedAssets = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setAssets(mockAssets as never[] as Asset[]);
      setIsLoading(false);
    }, 1000);
  }, []);

  return { assets, isLoading };
};

export { useLinkedAssets };
