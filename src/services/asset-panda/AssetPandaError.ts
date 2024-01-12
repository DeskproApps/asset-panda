import type { AssetPandaAPIError } from "./types";

export type InitData = {
  status: number,
  data: AssetPandaAPIError,
};

class AssetPandaError extends Error {
  status: number;
  data: AssetPandaAPIError;

  constructor({ status, data }: InitData) {
    const message = "AssetPanda Api Error";
    super(message);

    this.data = data;
    this.status = status;
  }
}

export { AssetPandaError };
