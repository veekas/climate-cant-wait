import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import { HeaderContainer } from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  SpanLink,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    // const scrollTo = (id: string) => {
    //   const element = document.getElementById(id) as HTMLDivElement;
    //   element.scrollIntoView({
    //     behavior: "smooth",
    //   });
    //   setVisibility(false);
    // };
    return (
      <>
        <CustomNavLinkSmall>
          <SpanLink to="/home#about">{t("About")}</SpanLink>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <SpanLink to="/bills">{t("Bills")}</SpanLink>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ width: "180px" }}>
          <Span>
            <Button href="/take-action">{t("LAUNCH DAY")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <HeaderContainer>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="ccw2022_logo_color.svg" height="100px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
