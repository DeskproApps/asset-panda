import { Stack } from "@deskpro/deskpro-ui";
import { DEFAULT_ERROR } from "../../constants";
import { AssetPandaError } from "../../services/asset-panda";
import { Container, ErrorBlock } from "../common";
import { FallbackRender } from "@sentry/react";

const ErrorFallback: FallbackRender = ({ error }) => {
  const message = DEFAULT_ERROR;
  let consoleMessage;


  if (error instanceof AssetPandaError) {
    //..
  }

  // eslint-disable-next-line no-console
  console.error(consoleMessage || error);

  return (
    <Container>
      <ErrorBlock
        text={(
          <Stack gap={6} vertical style={{padding: "8px"}}>
            {message}
          </Stack>
        )}
      />
    </Container>
  );
};

export { ErrorFallback };
