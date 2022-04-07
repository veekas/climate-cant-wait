import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Img } from "../../../common/Img";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import BillInfo from "../BillInfo";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  ButtonWrapper,
} from "./styles";

const LeftContentBlock = ({
  icon,
  image,
  title,
  bills,
  button,
  content,
  contact,
  section,
  scrollTarget = "about",
  onClick,
  t,
  id,
}: ContentBlockProps) => {
  const textWidth = icon || image ? 11 : 24;

  return (
    <LeftContentSection>
      <Row justify="space-between" align="middle" id={id}>
        {icon && (
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        )}
        {image && (
          <Col lg={11} md={11} sm={11} xs={24}>
            <Img src={image} width="100%" height="100%" />
          </Col>
        )}
        <Col lg={textWidth} md={textWidth} sm={textWidth} xs={24}>
          <ContentWrapper>
            <h6>{t(title)}</h6>
            <Content>
              {content} {bills && <BillInfo bills={bills} />}
            </Content>
            {contact && (
              <Content>
                <i>{contact}</i>
              </Content>
            )}
            <ButtonWrapper>
              {typeof button === "object" &&
                button.map((item: any, id: number) => {
                  return (
                    <Button
                      key={id}
                      color={item.color}
                      href={item.href}
                      fixedWidth={true}
                      onClick={onClick}
                    >
                      {t(item.title)}
                    </Button>
                  );
                })}
            </ButtonWrapper>
            <ServiceWrapper>
              <Row justify="space-between">
                {typeof section === "object" &&
                  section.map((item: any, id: number) => {
                    return (
                      <Col key={id} span={11}>
                        <SvgIcon src={item.icon} width="60px" height="60px" />
                        <MinTitle>{t(item.title)}</MinTitle>
                        <MinPara>{t(item.content)}</MinPara>
                      </Col>
                    );
                  })}
              </Row>
            </ServiceWrapper>
          </ContentWrapper>
        </Col>
      </Row>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
