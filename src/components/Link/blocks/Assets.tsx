import { Fragment } from "react";
import { Checkbox } from "@deskpro/deskpro-ui";
import { LoadingSpinner, HorizontalDivider } from "@deskpro/app-sdk";
import { NoFoundAssets, Card } from "../../common";
import { AssetItem } from "../../AssetItem";
import type { FC } from "react";
import type { Asset } from "../../../services/asset-panda/types";

export type Props = {
  isLoading: boolean,
  assets: Asset[],
  selectedAssets: Asset[],
  onChangeSelectedAsset: (asset: Asset) => void,
};

const Assets: FC<Props> = ({
  isLoading,
  assets,
  selectedAssets,
  onChangeSelectedAsset,
}) => {
  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <NoFoundAssets assets={assets}>
      {(assets) => assets.map((asset) => (
        <Fragment key={asset.id}>
          <Card>
            <Card.Media>
              <Checkbox
                size={12}
                containerStyle={{ marginTop: 4 }}
                onChange={() => onChangeSelectedAsset(asset)}
                checked={selectedAssets.some((selectedAsset) => {
                  return asset.id === selectedAsset.id;
                })}
              />
            </Card.Media>
            <Card.Body>
              <AssetItem
                asset={asset}
                onClickTitle={() => onChangeSelectedAsset(asset)}
              />
            </Card.Body>
          </Card>
          <HorizontalDivider style={{ marginBottom: 6 }} />
        </Fragment>
      ))}
    </NoFoundAssets>
  );
};

export { Assets };
