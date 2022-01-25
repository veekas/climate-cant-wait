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
            // <p>Below are some ways to take action with Climate Can't Wait.</p>
            <p>
              Tuesday, January 25, is Climate Can’t Wait 2022’s big kickoff!
              Tell Governor Hochul, Senate Majority Leader Stewart-Cousins, and
              Assembly Speaker Heastie that 2022 is the year when we want REAL
              ACTION ON CLIMATE!
            </p>
          }
          id="take-action"
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
                Anytime all day call Governor Hochul, Senate Majority Leader
                Stewart-Cousins and Assembly Speaker Heastie, and tell them
                "Climate Can’t Wait"!{" "}
                <a href="https://docs.google.com/document/d/1hdBq2eJ_njLJKqlDMGRmhcbZaglD-RqjimIIdnRf-rU/edit?usp=sharing">
                  Here are the phone numbers to call and a sample call script to
                  use.
                </a>
              </div>
              <br />
              <div>
                <div>
                  <b>Zoom Parties</b>
                </div>
                <br />
                Want to make calls in company with your fellow New Yorkers? Join
                a Phone Party at noon or at 6 pm to call together!{" "}
                <a href="https://fwwatch.zoom.us/j/93589005470?source=website-climate-cant-wait-take-action">
                  Here is the Zoom link.
                </a>
              </div>
              <br />
              <div>
                <div>
                  <b>Extra Credit</b>
                </div>
                <br />
                Want to do more? Look at our{" "}
                <a href="https://docs.google.com/document/d/1hdBq2eJ_njLJKqlDMGRmhcbZaglD-RqjimIIdnRf-rU/edit?usp=sharing">
                  easy remote action guide
                </a>{" "}
                for ideas!
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
                Anytime all day call Governor Hochul, Senate Majority Leader
                Stewart-Cousins and Assembly Speaker Heastie, and tell them
                "Climate Can’t Wait"!{" "}
                <a href="https://docs.google.com/document/d/1hdBq2eJ_njLJKqlDMGRmhcbZaglD-RqjimIIdnRf-rU/edit?usp=sharing">
                  Here are the phone numbers to call and a sample call script to
                  use.
                </a>
              </div>
              <br />
              <ul>
                <li>
                  12pm: ALBANY on the State Street side of the Capitol building.
                  (Instagram live stream:{" "}
                  <a href="https://instagram.com/sunrisemvmtnyc">
                    @sunrisemvmtnyc
                  </a>
                  )
                </li>
                <br />
                <li>
                  3:30: YONKERS in Van Der Donck Park, directly across from the
                  Yonkers Metro-North Station and next to the Yonkers Riverfront
                  Library
                </li>
                <br />
                <li>
                  3:30: MANHATTAN at 633 Third Avenue (Instagram live stream:{" "}
                  <a href="https://instagram.com/sunrisemvmtnyc">
                    @sunrisemvmtnyc
                  </a>
                  )
                </li>
              </ul>
              <div>
                Bring signs with your organizational logo or make a sign with a
                countdown clock. We’ll have banners and buttons. We’re asking
                everyone who attends to be fully vaccinated and masked and to
                respect social distancing. PREPARE TO BE LOUD!
              </div>
              <br />
              <div>
                <a href="https://actionnetwork.org/events/climate-cant-wait-mobilization-january-2022">
                  Click here to learn more about the in-person actions.
                </a>
              </div>
            </>
          }
          button="More Info"
          section="local-action"
          id="local-action"
        />
      </Container>
    </>
  );
};

export default Bills;
