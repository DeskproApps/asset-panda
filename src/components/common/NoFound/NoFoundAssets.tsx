import size from "lodash/size";
import { NoFound } from "./NoFound";
import type { FC, ReactNode } from "react";
import type { Asset } from "../../../services/asset-panda/types";

export type Props = {
  assets: Asset[],
  children?: (assets: Asset[]) => ReactNode,
}

const NoFoundAssets: FC<Props> = ({ children, assets }) => (
  <>
    {!Array.isArray(assets)
      ? <NoFound/>
      : !size(assets)
      ? <NoFound text="No AssetPanda assets found"/>
      : children && children(assets)
    }
  </>
);

export { NoFoundAssets };
