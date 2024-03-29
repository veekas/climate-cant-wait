import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Img } from "../../../common/Img";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import BillInfo from "../BillInfo";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const RightBlock = ({
  title,
  content,
  contact,
  bills,
  button,
  icon,
  image,
  t,
  scrollTarget = "about",
  onClick,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const textWidth = icon || image ? 11 : 24;

  return (
    <RightBlockContainer>
      <Row justify="space-between" align="middle" id={id}>
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
                      onClick={onClick || (() => scrollTo(scrollTarget))}
                    >
                      {t(item.title)}
                    </Button>
                  );
                })}
            </ButtonWrapper>
          </ContentWrapper>
        </Col>
        {icon && (
          <Col lg={11} md={11} sm={11} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        )}
        {image && (
          <Col lg={11} md={11} sm={11} xs={24}>
            <Img src={image} width="100%" height="100%" />
          </Col>
        )}
      </Row>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
