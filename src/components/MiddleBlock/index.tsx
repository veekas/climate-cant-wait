import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  id: string;
  title?: any;
  content: any;
  button?: any;
  t: any;
  scrollTarget?: string;
  onClick?: any;
  style?: any;
}

const MiddleBlock = ({
  id,
  title,
  content,
  button,
  t,
  scrollTarget = "about",
  onClick,
  style,
}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection id={id} style={style || undefined}>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              {title ? <h6>{title}</h6> : <></>}
              <Content>{content}</Content>
              {/* {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )} */}
              {typeof button === "object" &&
                button.map((item: any, id: number) => {
                  return (
                    <Button
                      key={id}
                      color={item.color}
                      href={item.href}
                      fixedWidth={true}
                      onClick={() => scrollTo(scrollTarget)}
                    >
                      {t(item.title)}
                    </Button>
                  );
                })}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
