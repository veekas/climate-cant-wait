import { StyledContainer, StyledHeaderContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, children }: ContainerProps) => (
  <StyledContainer border={border}>{children}</StyledContainer>
);

export const HeaderContainer = ({ border, children }: ContainerProps) => (
  <StyledHeaderContainer border={border}>{children}</StyledHeaderContainer>
);

export default Container;
