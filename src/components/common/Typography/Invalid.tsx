import styled from "styled-components";
import { TSpan } from "@deskpro/deskpro-ui";
import type { FC } from "react";

const InvalidStyled = styled(TSpan)`
  color: ${({ theme }) => theme.colors.red100};
`;

const Invalid: FC = (props) => (
  <InvalidStyled type="p1" {...props} />
);

export { Invalid };
