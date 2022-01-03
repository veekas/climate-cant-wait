import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  href,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton
    color={color}
    fixedWidth={fixedWidth}
    onClick={href ? () => (window.location.href = href) : onClick}
  >
    {children}
  </StyledButton>
);
