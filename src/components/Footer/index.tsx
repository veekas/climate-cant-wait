import { Row /*Col*/ } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

// import i18n from "i18next";
import {
  // FooterSection,
  // Title,
  NavLink,
  Extra,
  LogoContainer,
  // Para,
  // Large,
  // Chat,
  // Empty,
  // FooterContainer,
  // Language,
  // Label,
  // LanguageSwitch,
  // LanguageSwitchContainer,
} from "./styles";

// interface SocialLinkProps {
//   href: string;
//   src: string;
//   hidden?: boolean;
// }

const Footer = ({ t }: any) => {
  // const handleChange = (language: string) => {
  //   i18n.changeLanguage(language);
  // };

  // const SocialLink = ({ hidden, href, src }: SocialLinkProps) => {
  //   return (
  //     <a
  //       href={href}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       key={src}
  //       aria-label={src}
  //       aria-hidden={hidden}
  //       style={hidden ? { display: "none" } : undefined}
  //     >
  //       <SvgIcon src={src} width="25px" height="25px" aria-hidden={hidden} />
  //     </a>
  //   );
  // };

  return (
    <>
      {/* <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection> */}
      <Extra>
        <Container border={false}>
          <Row justify="space-between" align="middle">
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="ccw2022_logo_color.svg"
                  aria-label="homepage"
                  // width="101px"
                  height="100px"
                />
              </LogoContainer>
            </NavLink>
            {/* <FooterContainer>
              <SocialLink
                href="https://twitter.com/climatecantwait2022" // TODO: get these handles
                src="twitter.svg"
                hidden
              />
              <SocialLink
                href="https://medium.com/@climatecantwait/" // TODO: get these handles
                src="medium.svg"
                // hidden
              />
              <SocialLink
                href="https://medium.com/@climatecantwait/" // TODO: get these handles
                src="medium.svg"
                // hidden
              />
            </FooterContainer> */}
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
