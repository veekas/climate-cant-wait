import styled from "styled-components";

export const StyledFullBleedContainer = styled("section")<any>`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 5% 0 10%;
`;

export const BackgroundImage = styled("img")<any>`
  opacity: 0.25;
  position: absolute;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
`;
