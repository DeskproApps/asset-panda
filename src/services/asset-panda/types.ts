export type Response<T> = Promise<T>;

export type AssetPandaAPIError = {
  //..
};

export type Asset = {
  id: string,
  title: string,
  device_name: string,
  username: string,
  model: string,
  unique_identifier: string,
  serial_number: string,
  os_version: string,
  storage_capacity: string,
};

export type Group = {
  id: string,
  name: string,
};
