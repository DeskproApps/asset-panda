import { get } from "lodash";
import { Search, Select } from "@deskpro/app-sdk";
import { getOptions } from "../../../utils";
import { Label } from "../../common";
import type { FC } from 'react';
import type { Group } from "../../../services/asset-panda/types";

export type Props = {
  isLoading: boolean,
  groups: Group[],
  onChangeGroup: (groupId: Group["id"]) => void,
  onChangeSearchQuery: (search: string) => void,
};

const Filters: FC<Props> = ({
  groups,
  isLoading,
  onChangeGroup,
  onChangeSearchQuery,
}) => {
  return (
    <>
      <Search
        isFetching={isLoading}
        onChange={onChangeSearchQuery}
      />
      <Label label="Asset group" required>
        <Select<Group["id"]>
          initValue={get(groups, [0, "id"], "") || ""}
          options={getOptions(groups)}
          onChange={onChangeGroup as () => void}
        />
      </Label>
    </>
  );
};

export { Filters };
