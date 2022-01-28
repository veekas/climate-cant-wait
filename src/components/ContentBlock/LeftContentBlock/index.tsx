import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import BillInfo from "../BillInfo";
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
  bills,
  button,
  content,
  contact,
  section,
  t,
  id,
}: ContentBlockProps) => {
  const textWidth = icon ? 11 : 24;

  return (
    <LeftContentSection>
      <Row justify="space-between" align="middle" id={id}>
        {icon && (
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
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
            {/* {button && <Button onClick={onClick}>{button}</Button>} */}
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
