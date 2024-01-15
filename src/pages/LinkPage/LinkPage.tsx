import { useMemo, useState, useCallback } from "react";
import { get, size, cloneDeep } from "lodash";
import { useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import {
  useDeskproAppClient,
  useDeskproLatestAppContext,
} from "@deskpro/app-sdk";
import { useSetTitle, useAsyncError, useRegisterElements } from "../../hooks";
import { useSearch } from "./hooks";
import { Link } from "../../components";
import type { FC } from "react";
import type { Maybe, UserContext } from "../../types";
import type { Asset, Group } from "../../services/asset-panda/types";

const LinkPage: FC = () => {
  const navigate = useNavigate();
  const { client } = useDeskproAppClient();
  const { context } = useDeskproLatestAppContext() as { context: UserContext };
  const { asyncErrorHandler } = useAsyncError();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [, setGroupId] = useState<Maybe<Group["id"]>>(null);
  const [selectedAssets, setSelectedAssets] = useState<Asset[]>([]);
  const { assets, groups, isLoading } = useSearch(searchQuery);
  const dpUserId = useMemo(() => get(context, ["data", "user", "id"]), [context]);

  const onChangeSearchQuery = useDebouncedCallback(setSearchQuery, 1000);

  const onChangeSelectedAsset = useCallback((asset: Asset) => {
    let newSelectedIssues = cloneDeep(selectedAssets);

    if (selectedAssets.some((selectedAsset) => asset.id === selectedAsset.id)) {
      newSelectedIssues = selectedAssets.filter((selectedAsset) => {
        return selectedAsset.id !== asset.id;
      });
    } else {
      newSelectedIssues.push(asset);
    }

    setSelectedAssets(newSelectedIssues);
  }, [selectedAssets]);

  const onCancel = useCallback(() => navigate("/home"), [navigate]);

  const onLinkAssets = useCallback(() => {
    if (!client || !dpUserId || !size(selectedAssets)) {
      return;
    }

    // eslint-disable-next-line no-console
    console.log(">>> onLink:", selectedAssets);

    setIsSubmitting(true);

    Promise.all([
      // ...selectedIssues.map((issue) => setEntityService(client, ticketId, issue.id, getEntityMetadata(issue))),
    ])
      .then(() => navigate("/home"))
      .catch(asyncErrorHandler)
      .finally(() => setIsSubmitting(false));
  }, [client, navigate, selectedAssets, dpUserId, asyncErrorHandler]);

  useSetTitle("Link Assets");

  useRegisterElements(({ registerElement }) => {
    registerElement("refresh", { type: "refresh_button" });
    registerElement("home", {
      type: "home_button",
      payload: { type: "changePage", path: "/home" },
    });
  });

  return (
    <Link
      assets={assets}
      isLoading={isLoading}
      isSubmitting={isSubmitting}
      onCancel={onCancel}
      onLinkAssets={onLinkAssets}
      selectedAssets={selectedAssets}
      onChangeSelectedAsset={onChangeSelectedAsset}
      onChangeSearchQuery={onChangeSearchQuery}
      groups={groups}
      onChangeGroup={setGroupId}
    />
  );
};

export { LinkPage };
