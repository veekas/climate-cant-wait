import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

const LeftContentBlock = ({
  icon,
  title,
  content,
  contact,
  section,
  t,
  id,
}: ContentBlockProps) => {
  const textWidth = icon ? 11 : 24;

  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          {icon && (
            <Col lg={11} md={11} sm={12} xs={24}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>
          )}
          <Col lg={textWidth} md={textWidth} sm={textWidth} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{content}</Content>
              <Content>
                <i>{contact}</i>
              </Content>
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
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
