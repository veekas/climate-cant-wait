import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #000000;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`

  &:hover,
  &:active,
  &:focus {
  }
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  padding: 3rem 0;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #000000;
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)<any>`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  max-width: max-content;

  &:hover {
    color: #FF4040;
    text-underline-position: under;
    text-decoration: #FF4040 wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #000000;
  max-width: fit-content;
  border-bottom: 1px solid #000000;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    border-bottom: 1px solid #FF4040;
    color: #FF4040;
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: #FF4040;
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #000000;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #000000;
  display: block;
  margin-bottom: 2rem;
  font-family: "Klima Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;

export const OrgNames = styled("p")`
  font-size: 0.75rem;
`;

export const Attribution = styled("p")`
  color: rgb(241, 242, 243);
  cursor: default;
  font-size: 0.75rem;
  margin-left: auto;

  a {
    color: rgb(241, 242, 243);

    &:hover,
    &:active,
    &:focus {
      color: rgb(241, 242, 243);
      cursor: default;
    }
  }
`