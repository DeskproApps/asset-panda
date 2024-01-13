import size from "lodash/size";
import { Stack } from "@deskpro/deskpro-ui";
import { Button } from "../../common";
import type { FC } from "react";
import type { Asset } from "../../../services/asset-panda/types";

export type Props = {
  isSubmitting: boolean,
  onCancel: () => void,
  selectedAssets: Asset[],
  onLinkAssets: () => void,
};

const Buttons: FC<Props> = ({ isSubmitting, selectedAssets, onLinkAssets, onCancel }) => (
  <Stack justify="space-between">
    <Button
      type="button"
      text="Link Assets"
      disabled={!size(selectedAssets) || isSubmitting}
      loading={isSubmitting}
      onClick={onLinkAssets}
    />
    <Button
      type="button"
      text="Cancel"
      intent="secondary"
      onClick={onCancel}
    />
  </Stack>
);

export { Buttons };
