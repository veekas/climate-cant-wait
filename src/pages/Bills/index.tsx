import { lazy } from "react";
import AboutContent from "../../content/AboutContent.json";
import Bill1Content from "../../content/Bill1Content.json";
import Bill2Content from "../../content/Bill2Content.json";
import Bill3Content from "../../content/Bill3Content.json";
import Bill4Content from "../../content/Bill4Content.json";
import Bill5Content from "../../content/Bill5Content.json";
import Bill6Content from "../../content/Bill6Content.json";
import Bill7Content from "../../content/Bill7Content.json";
import Bill8Content from "../../content/Bill8Content.json";
import Bill9Content from "../../content/Bill9Content.json";
import Bill10Content from "../../content/Bill10Content.json";
import Bill11Content from "../../content/Bill11Content.json";
import Bill12Content from "../../content/Bill12Content.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const FullBleedContainer = lazy(
  () => import("../../components/FullBleedContainer")
);

/*
"title": "Climate Can't Wait 2022",
  "button": "Join Us"
  {
  "section": "idk",
  "title": "Bill Package",
  "text": "", 
  "button": [
    {
      "title": "Join Us"
    },
    {
      "title": "Learn More",
      "color": "#fff"
    }
  ]
}

*/

const Bills = () => {
  return (
    <>
      <ScrollToTop />
      <FullBleedContainer
        backgroundImage="/Craig-Fildes-capitol.jpeg"
        backgroundColor="#FEE879"
      >
        <MiddleBlock
          style={{ padding: "4rem 0 4rem" }}
          title={<>Our 2022 Bills and Proposals</>}
          content={
            <p>
              Information about the bills and proposals in the Climate Can't
              Wait 2022 package is listed below.
            </p>
          }
          button={AboutContent.button}
          id="intro"
        />
      </FullBleedContainer>
      <Container>
        <ContentBlock
          type="left"
          title={Bill1Content.title}
          content={Bill1Content.text}
          contact={Bill1Content.contact}
          section={Bill1Content.section}
          bills={Bill1Content.bills}
          id="bill1"
        />
        <ContentBlock
          type="right"
          title={Bill2Content.title}
          content={Bill2Content.text}
          contact={Bill2Content.contact}
          section={Bill2Content.section}
          id="bill2"
        />
        <ContentBlock
          type="left"
          title={Bill3Content.title}
          content={Bill3Content.text}
          contact={Bill3Content.contact}
          section={Bill3Content.section}
          bills={Bill3Content.bills}
          id="bill3"
        />
        <ContentBlock
          type="right"
          title={Bill4Content.title}
          content={
            <>
              Creates a new authority funded by a polluter penalty fee paid by
              corporate polluters to fund:
              <br />
              <br />
              <ol>
                <li>
                  large scale investments like offshore wind, electric buses,
                  and public housing energy upgrades;
                </li>
                <li>
                  grants to community organizations to create local climate,
                  adaptation, and resiliency projects, particularly in frontline
                  communities;
                </li>
                <li>
                  support for fossil fuel dependent workers and communities; and
                  4) rebates for working New Yorkers and small businesses to
                  defray increased energy costs. (
                  <a href="https://nyassembly.gov/leg/?bn=A06967&term=2021">
                    A6967, Cahill
                  </a>
                  ;{" "}
                  <a href="https://www.nysenate.gov/legislation/bills/2021/S4264">
                    S4264, Parker
                  </a>
                  )
                </li>
              </ol>
            </>
          }
          contact={<>Contact Stephan Edel, NYRenews, stephan@NYRenews.org</>}
          section={Bill4Content.section}
          id="bill4"
        />
        <ContentBlock
          type="left"
          title={Bill5Content.title}
          content={Bill5Content.text}
          contact={Bill5Content.contact}
          section={Bill5Content.section}
          bills={Bill5Content.bills}
          id="bill5"
        />
        <ContentBlock
          type="right"
          title={Bill10Content.title}
          content={Bill10Content.text}
          contact={Bill10Content.contact}
          section={Bill10Content.section}
          bills={Bill10Content.bills}
          id="bill10"
        />
        <ContentBlock
          type="right"
          title={Bill6Content.title}
          content={Bill6Content.text}
          contact={Bill6Content.contact}
          section={Bill6Content.section}
          bills={Bill6Content.bills}
          id="bill6"
        />
        <ContentBlock
          type="left"
          title={Bill7Content.title}
          content={Bill7Content.text}
          contact={Bill7Content.contact}
          section={Bill7Content.section}
          bills={Bill7Content.bills}
          id="bill7"
        />
        <ContentBlock
          type="right"
          title={Bill8Content.title}
          content={Bill8Content.text}
          contact={Bill8Content.contact}
          section={Bill8Content.section}
          id="bill8"
        />
        <ContentBlock
          type="left"
          title={Bill9Content.title}
          content={Bill9Content.text}
          contact={Bill9Content.contact}
          section={Bill9Content.section}
          bills={Bill9Content.bills}
          id="bill9"
        />
        <ContentBlock
          type="left"
          title={Bill11Content.title}
          content={Bill11Content.text}
          contact={Bill11Content.contact}
          section={Bill11Content.section}
          bills={Bill11Content.bills}
          id="bill11"
        />
        <ContentBlock
          type="right"
          title={Bill12Content.title}
          content={Bill12Content.text}
          contact={Bill12Content.contact}
          section={Bill12Content.section}
          bills={Bill12Content.bills}
          id="bill12"
        />
      </Container>
    </>
  );
};

export default Bills;
