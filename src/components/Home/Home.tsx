import { Fragment } from "react";
import { size } from "lodash";
import { Title, HorizontalDivider } from "@deskpro/app-sdk";
import { Container, NoFoundAssets } from "../common";
import { AssetItem } from "../AssetItem";
import type { FC } from "react";
import type { Asset } from "../../services/asset-panda/types";

type Props = {
  assets: Asset[],
  onNavigateToLink: () => void,
  onNavigateToView: (assetId: Asset["id"]) => void,
};

const Home: FC<Props> = ({ assets, onNavigateToView, onNavigateToLink }) => {
  return (
    <Container>
      <Title
        title={`Linked assets (${size(assets)})`}
        onClick={onNavigateToLink}
      />
      <NoFoundAssets assets={assets}>
        {(assets) => assets.map((asset) => (
          <Fragment key={asset.id}>
            <AssetItem asset={asset} onClickTitle={() => onNavigateToView(asset.id)} />
            <HorizontalDivider style={{ marginBottom: 6 }} />
          </Fragment>
        ))}
      </NoFoundAssets>
    </Container>
  );
};

export { Home };
