import { HorizontalDivider } from "@deskpro/app-sdk";
import { Container } from "../common";
import { Filters, Buttons, Assets } from "./blocks";
import type { FC } from "react";
import type { Asset, Group } from "../../services/asset-panda/types";

type Props = {
  assets: Asset[],
  groups: Group[],
  isLoading: boolean,
  isSubmitting: boolean,
  onCancel: () => void,
  onLinkAssets: () => void,
  selectedAssets: Asset[],
  onChangeGroup: (groupId: Group["id"]) => void,
  onChangeSelectedAsset: (asset: Asset) => void,
  onChangeSearchQuery: (search: string) => void,
};

const Link: FC<Props> = ({
  assets,
  groups,
  onCancel,
  isLoading,
  onLinkAssets,
  isSubmitting,
  onChangeGroup,
  selectedAssets,
  onChangeSearchQuery,
  onChangeSelectedAsset,
}) => {
  return (
    <>
      <Container>
        <Filters
          isLoading={isLoading}
          groups={groups}
          onChangeGroup={onChangeGroup}
          onChangeSearchQuery={onChangeSearchQuery}
        />
        <Buttons
          onCancel={onCancel}
          isSubmitting={isSubmitting}
          onLinkAssets={onLinkAssets}
          selectedAssets={selectedAssets}
        />
      </Container>
      <HorizontalDivider/>
      <Container>
        <Assets
          isLoading={isLoading}
          assets={assets}
          selectedAssets={selectedAssets}
          onChangeSelectedAsset={onChangeSelectedAsset}
        />
      </Container>
    </>
  );
};

export { Link };
