import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#ED1C24"};
  color: ${(p) => (p.color ? "#ED1C24" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  max-width: 180px;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: ${(p) => (p.color ? "#000000" : "#fff")};
    border: ${(p) => (p.color ? "1px solid  #FFBFBF" : "1px solid #FF4040")};
    background-color: ${(p) => (p.color ? "#FFBFBF" : "#FF4040")};
  }
`;
