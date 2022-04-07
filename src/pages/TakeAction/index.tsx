import { lazy } from "react";

import TakeActionContent from "../../content/TakeActionContent.json";
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const FullBleedContainer = lazy(
  () => import("../../components/FullBleedContainer")
);

const Bills = () => {
  return (
    <>
      <ScrollToTop />
      <FullBleedContainer
        backgroundImage="/Craig-Fildes-capitol.jpeg"
        backgroundColor="#FFFF80"
      >
        <MiddleBlock
          style={{ padding: "5rem 0 4rem" }}
          title={<>Take Action Today!</>}
          content={
            <>
              {/* <p>Below are some ways to take action with Climate Can't Wait.</p> */}
              <p>
                Rally with Climate Can’t Wait During Earth Week and on Earth
                Day!
              </p>
              <p>
                A group of intrepid climate activists will bike the Empire State
                Trail starting from New York City on Saturday, April 16th.
                They’ll be cheered on by rallies along the route culminating in
                a giant rally in Albany on Earth Day itself, April 22nd. Join
                us! Show Governor Hochul and the Legislature our power! We
                demand that they pass our package of bills this session because
                Climate Can’t Wait!
              </p>
              {/* <p>
                <b>
                  <a
                    href="https://actionnetwork.org/events/climate-cant-wait-earth-day-mobilization"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sign up here to be kept informed about all the Climate Can’t
                    Wait rallies!
                  </a>
                </b>
              </p> */}
            </>
          }
          button={TakeActionContent.button}
          id="intro"
        />
      </FullBleedContainer>
      <Container>
        <ContentBlock
          type="left"
          title="Meanwhile, here's some actions you can take right now!"
          content={
            <>
              <div>
                <div>
                  <b>Phone Calls</b>
                </div>
                <br />
                Call Governor Hochul, Senate Majority Leader Stewart-Cousins and
                Assembly Speaker Heastie, and tell them "Climate Can’t Wait"!{" "}
                <a
                  href="https://docs.google.com/document/d/1hdBq2eJ_njLJKqlDMGRmhcbZaglD-RqjimIIdnRf-rU/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Here are the phone numbers to call and a sample call script to
                  use.
                </a>
              </div>
              <br />
              <div>
                <div>
                  <b>Extra Credit</b>
                </div>
                <br />
                Want to post on social media or send emails? Look at our{" "}
                <a
                  href="https://docs.google.com/document/d/1hdBq2eJ_njLJKqlDMGRmhcbZaglD-RqjimIIdnRf-rU/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  easy remote action guide
                </a>{" "}
                for opportunities to help in other ways!
              </div>
            </>
          }
          section="remote-actions"
          id="remote-actions"
        />
      </Container>
    </>
  );
};

export default Bills;
