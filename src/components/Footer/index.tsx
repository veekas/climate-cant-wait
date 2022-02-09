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
  OrgNames,
  Attribution,
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
            <Row justify="space-between" align="middle">
              <OrgNames>
                Climate Can't Wait is a collaboration between 350NJ-Rockland,
                350NYC, 350Brooklyn, Citizen Action of New York, Divest NY,
                Empire State Indivisible, Energy Democracy Alliance, Food &
                Water Watch, For the Many, Forest Hills Green Team, Fossil Fuel
                Subsidies Coalition, El Puente, Hudson Center for Community and
                Environment, Indivisible Harlem, Indivisible Nation BK,
                Indivisible Scarsdale, Mid Hudson Valley DSA, New York
                Communities for Change, New York Lawyers for the Public
                Interest, NYPIRG, NY Renews, NYC Franciscan Justice Circle, New
                York State Council of Churches, New York Youth Climate Leaders,
                NYCD16 Indivisible, NYC-DSA Ecosocialist Working Group, PAUSE,
                People's Climate Movement-NY, Professional Staff Congress CUNY,
                Progressive Schenectady, Province of St. Mary of the Capuchin
                Order, Queens Climate Project, Queens County Young Democrats,
                Rise and Resist, Rockland United, Sheridan Hollow Alliance for
                Renewable Energy (SHARE), Sunrise Movement NYC, Tompkins County
                Climate Protection Initiative, TREEage, WE ACT for Environmental
                Justice, and WESPAC Foundation
              </OrgNames>
              <Attribution>
                Website built by{" "}
                <a href="https://veekasmeansprogress.com">Veekas Ashoka</a>
              </Attribution>
            </Row>
            {/*
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
            */}
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
