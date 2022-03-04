import { lazy } from "react";

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
                Tuesday, January 25, was Climate Can’t Wait 2022’s big kickoff!
                We generated almost 1500 calls to their offices and held major
                actions in Albany, Manhattan, and Yonkers! We're only just
                getting started. This page has up-to-date ways to keep up the
                pressure.
              </p>
              <p>
                <b>
                  <a href="https://actionnetwork.org/forms/stay-up-to-date-with-climate-cant-wait-3">
                    Sign up here to receive email updates
                  </a>
                </b>
              </p>
            </>
          }
          id="intro"
        />
      </FullBleedContainer>
      <Container>
        <ContentBlock
          type="left"
          title="Remote Actions"
          content={
            <>
              <div>
                <div>
                  <b>Phone Calls</b>
                </div>
                <br />
                Call Governor Hochul, Senate Majority Leader Stewart-Cousins and
                Assembly Speaker Heastie, and tell them "Climate Can’t Wait"!{" "}
                <a href="https://docs.google.com/document/d/1hdBq2eJ_njLJKqlDMGRmhcbZaglD-RqjimIIdnRf-rU/edit?usp=sharing">
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
                <a href="https://docs.google.com/document/d/1hdBq2eJ_njLJKqlDMGRmhcbZaglD-RqjimIIdnRf-rU/edit?usp=sharing">
                  easy remote action guide
                </a>{" "}
                for opportunities to help in other ways!
              </div>
            </>
          }
          section="remote-actions"
          id="remote-actions"
        />
        <ContentBlock
          type="right"
          title="Local Actions"
          content={
            <>
              <div>
                We had an incredible day of action on January 25th. CCW is now
                planning our next in-person day of action. Stay tuned for more
                information.
              </div>
              <div style={{ textAlign: "center", margin: "2rem 0 5rem" }}>
                <img
                  src="jan-25-graphic.png"
                  alt="january 25th social media graphic"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            </>
          }
          section="local-action"
          id="local-action"
        />
      </Container>
    </>
  );
};

export default Bills;
