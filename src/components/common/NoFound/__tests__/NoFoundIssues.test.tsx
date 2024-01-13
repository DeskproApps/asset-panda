import { cleanup } from "@testing-library/react";
import { render } from "../../../../../testing";
import { NoFoundAssets } from "../NoFoundAssets";
import type { Props } from "../NoFoundAssets";

const renderNoFoundAssets = (props?: Partial<Props>) => render((
  <NoFoundAssets
    assets={props?.assets as never}
    children={props?.children || "" as never}
  />
), { wrappers: { theme: true } });

describe("NoFoundIssues", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("render", async () => {
    const { findByText } = renderNoFoundAssets();
    expect(await findByText(/No found/i)).toBeInTheDocument();
  });

  test("should show \"No AssetPanda assets found\" if no issues", async () => {
    const { findByText } = renderNoFoundAssets({ assets: [] });
    expect(await findByText(/No AssetPanda assets found/i)).toBeInTheDocument();
  });

  test("should show passing \"children\" if issues exist", async () => {
    const { findByText } = renderNoFoundAssets({
      assets: [{ id: "001" }] as never[],
      children: () => "Some content",
    });

    expect(await findByText(/Some content/i)).toBeInTheDocument();
  });
});
