import { useCallback } from "react";
import get from "lodash/get";
import { Link, Title, TwoProperties } from "@deskpro/app-sdk";
import { AssetPandaLogo } from "../common";
import type { FC, MouseEvent } from "react";
import type { Asset } from "../../services/asset-panda/types";

export type Props = {
  asset: Asset,
  onClickTitle?: () => void,
};

const AssetItem: FC<Props> = ({ asset, onClickTitle }) => {
  const link = get(asset, ["href"]);

  const onClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    onClickTitle && onClickTitle();
  }, [onClickTitle]);

  return (
    <>
      <Title
        title={!onClickTitle
          ? get(asset, ["title"])
          : (<Link href="#" onClick={onClick}>{get(asset, ["title"])}</Link>)
        }
        marginBottom={10}
        {...(!link ? {} : { icon: <AssetPandaLogo/> })}
        {...(!link ? {} : { link: link })}
      />
      <TwoProperties
        leftLabel="Model"
        leftText={get(asset, ["model"])}
        rightLabel="OS Version"
        rightText={get(asset, ["os_version"])}
      />
      <TwoProperties
        leftLabel="Serial Number"
        leftText={get(asset, ["serial_number"])}
        rightLabel="Storage capacity"
        rightText={get(asset, ["storage_capacity"])}
      />
    </>
  );
};

export { AssetItem };
