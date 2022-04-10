import { lazy } from "react";

import TakeActionContent from "../../content/TakeActionContent.json";
import bikeTrek from "../../assets/EarthWeek-BikeTrek.jpg";
import rally22 from "../../assets/4-22_albany.jpg";

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
        backgroundColor="#FEE879"
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
            </>
          }
          button={TakeActionContent.button}
          id="intro"
        />
      </FullBleedContainer>
      <Container>
        <ContentBlock
          type="left"
          title="Join us in Albany on April 22nd!"
          content={
            <>
              <div>
                <b>
                  Register to attend{" "}
                  <a
                    href="https://actionnetwork.org/events/climate-cant-wait-earth-day-mobilization"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                  !
                </b>
              </div>
              <br />
              <div>
                <div>
                  <b>Busses</b>
                </div>
                <br />
                Need a ride? Reserve your spot on the bus at one of the
                following pick-up points:
                <ul>
                  <li>
                    <a href="https://actionnetwork.org/events/manhattan-bus-to-albany">
                      Manhattan
                    </a>
                  </li>
                  <li>
                    <a href="https://actionnetwork.org/events/brooklyn-bus-to-albany">
                      Brooklyn
                    </a>
                  </li>
                  <li>
                    <a href="https://actionnetwork.org/events/long-island-queens-bus-to-albany">
                      Long Island &amp; Queens
                    </a>
                  </li>
                  <li>
                    <a href="https://actionnetwork.org/events/white-plains-new-paltz-bus-to-albany">
                      White Plains &amp; New Paltz
                    </a>
                  </li>
                  <li>
                    <a href="https://actionnetwork.org/events/buffalo-rochester-bus-to-albany">
                      Buffalo &amp; Rochester
                    </a>
                  </li>
                </ul>
              </div>
            </>
          }
          image={rally22}
          section="albany-action"
          id="albany-action"
        />
        <ContentBlock
          type="right"
          title="Join a local rally during the week!"
          content={
            <>
              <div>
                A group of young climate justice activists are riding their
                bicycles from New York City to Albany to raise awareness about
                the importance of climate action in New York. Greet them as they
                ride through your area during the week. See the full schedule{" "}
                <a href="/bike-trek">here</a>.
              </div>
            </>
          }
          image={bikeTrek}
          section="bike-trek-actions"
          id="bike-trek-actions"
        />
        <ContentBlock
          type="left"
          title="You can also make a difference anytime you're free"
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
              <br />
              <div>
                <div>Stay informed</div>
                <br />
                Sign up{" "}
                <a
                  href="https://actionnetwork.org/events/climate-cant-wait-earth-day-mobilization"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                to be kept informed about all the Climate Can’t Wait 2022 will
                be working on after Earth Day!
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
