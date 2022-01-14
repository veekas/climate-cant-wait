import styled from "styled-components";

export const MiddleBlockSection = styled("div")`
  position: relative;
  padding: 2rem 0 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Content = styled("div")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 66%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
