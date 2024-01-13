import { get } from "lodash";
import { Title, Property } from "@deskpro/app-sdk";
import { Container } from "../common";
import type { FC } from "react";
import type { Asset } from "../../services/asset-panda/types";

type Props = {
  asset: Asset,
};

const View: FC<Props> = ({ asset }) => {
  return (
    <Container>
      <Title title={get(asset, ["title"], "-") || "-"}/>
      <Property
        label="Device name"
        text={get(asset, ["device_name"], "-") || "-"}
      />
      <Property
        label="User name"
        text={get(asset, ["username"], "-") || "-"}
      />
      <Property
        label="Model"
        text={get(asset, ["model"], "-") || "-"}
      />
      <Property
        label="Unique identifier"
        text={get(asset, ["unique_identifier"], "-") || "-"}
      />
      <Property
        label="Serial Number"
        text={get(asset, ["serial_number"], "-") || "-"}
      />
      <Property
        label="OS Version"
        text={get(asset, ["os_version"], "-") || "-"}
      />
      <Property
        label="Storage Capacity"
        text={get(asset, ["storage_capacity"], "-") || "-"}
      />
    </Container>
  );
};

export { View };
