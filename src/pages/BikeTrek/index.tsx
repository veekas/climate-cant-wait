import { lazy } from "react";
import TakeActionContent from "../../content/TakeActionContent.json";
import { Img } from "../../common/Img";

import { TimelineSection } from "./styles";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const FullBleedContainer = lazy(
  () => import("../../components/FullBleedContainer")
);

const BikeTrek = () => {
  return (
    <>
      <ScrollToTop />
      <FullBleedContainer
        backgroundImage="/Craig-Fildes-capitol.jpeg"
        backgroundColor="#FEE879"
      >
        <MiddleBlock
          style={{ padding: "4rem 0 4rem" }}
          title="CCW's Bike Trek for Climate Action"
          content={
            <p>
              A group of young climate justice activists are cycling from NYC to
              Albany to build momentum for climate action in Albany! Join us at
              one of our local rallies, ride with us for a part of the trail,
              follow us on social media, or (most importantly) join us when we
              arrive in Albany on April 22nd!
            </p>
          }
          button={TakeActionContent.button}
          id="intro"
        />
      </FullBleedContainer>
      <Container>
        <ContentBlock
          type="right"
          title=""
          content={
            <>
              <TimelineSection>
                <ul>
                  <li>
                    <div>
                      <h2 id="16">4/16: Manhattan & Yonkers</h2>
                      <p>
                        Rally at 9:30am at{" "}
                        <a href="https://www.google.com/maps/place/40%C2%B042'13.6%22N+74%C2%B000'58.1%22W/@40.703764,-74.0166782,181m/data=!3m2!1e3!4b1!4m9!1m2!2m1!1sCastle+Clinton+Plaza,+Battery+Park!3m5!1s0x0:0x1cef14637f6c2324!7e2!8m2!3d40.7037637!4d-74.0161309">
                          Castle Clinton Plaza, Battery Park
                        </a>
                      </p>
                      <p>🚲 22 miles</p>
                      <p>
                        Rally at 2:00pm at{" "}
                        <a href="https://goo.gl/maps/A2MS6qxsKdNqBdui7">
                          Van Der Donck Park, Yonkers
                        </a>
                      </p>
                      <Img
                        src="01_CCW_MarchRally_BatteryParkYonkers_416.jpg"
                        alt="Graphic for 4/16 Rallies"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2 id="17">4/17: Peekskill</h2>
                      <p>
                        🚲 23 miles (start at{" "}
                        <a href="https://goo.gl/maps/cPfQT6zvXtKCvDAH9">
                          V.E. Macy Park
                        </a>{" "}
                        at 8:30am)
                      </p>
                      <p>
                        Rally at 12:00pm at{" "}
                        <a href="https://goo.gl/maps/hbvbDmLaaDoscnHa7">
                          Peekskill Riverfront Park
                        </a>
                      </p>
                      <p>
                        🚲 17 miles to Brewster (start at{" "}
                        <a href="https://goo.gl/maps/vTYpSRuJExAKixuc7">
                          Yorktown Heights
                        </a>{" "}
                        at 3:00pm)
                      </p>
                      <Img
                        src="02_CCW_MarchRally_Peekskill_417.jpg"
                        alt="Graphic for 4/17 Rally"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2 id="18">4/18: Beacon & Newburgh</h2>
                      <p>
                        🚲 40 miles (start at{" "}
                        <a href="https://goo.gl/maps/n4EjyiSUkUxgzUR26">
                          Castle Park
                        </a>{" "}
                        at 10:00am)
                      </p>
                      <p>
                        Rally at 5:15pm at the{" "}
                        <a href="https://goo.gl/maps/Jjv428jHj34ypJsg7">
                          ferry landing in Beacon
                        </a>
                        . Bring your bicycle!{" "}
                        <a href="https://fb.me/e/548zwYLT1">RSVP here</a>.
                      </p>
                      <p>⛴ $2.50 (sponsored tickets available)</p>
                      <p>
                        Rally at 6:00pm at{" "}
                        <a href="https://goo.gl/maps/ojLCou3PYrb9iVz58">
                          Safe Harbors Green, Newburgh
                        </a>
                        . Bring your bicycle!
                      </p>
                      <p>
                        🚲 5 miles across the Newburgh-Beacon Bridge to{" "}
                        <a href="https://goo.gl/maps/uq6AHNYxDqx8VpLCA">
                          Happy Valley Arcade Bar
                        </a>
                      </p>
                      <Img
                        src="03_CCW_MarchRally_BeaconNewburgh_418.jpg"
                        alt="Graphic for 4/18 Rally"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2 id="19">4/19: Poughkeepsie</h2>
                      <p>
                        🚲 26 miles (start at{" "}
                        <a href="https://goo.gl/maps/n4EjyiSUkUxgzUR26">
                          Polhill Park
                        </a>{" "}
                        at 10:00am)
                      </p>
                      <p>
                        Event at 2:00pm on the{" "}
                        <a href="https://goo.gl/maps/Jjv428jHj34ypJsg7">
                          Walkway Over the Hudson
                        </a>
                      </p>
                      <p>🚲 9 miles to New Paltz</p>
                      <Img
                        src="04_CCW_MarchRally_Poughkeepsie-Highland_419.jpg"
                        alt="Graphic for 4/19 Rally"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2 id="20">4/20: New Paltz</h2>
                      <p>
                        Rally at 12:00pm at{" "}
                        <a href="https://goo.gl/maps/YmhfxTnXjwiS1aYH6">
                          Hasbrouck Park, New Paltz
                        </a>
                      </p>
                      <p>🚲 36 miles to Germantown</p>
                      <Img
                        src="05_CCW_MarchRally_NewPaltz_420.jpg"
                        alt="Graphic for 4/20 Rally"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2 id="21">4/21: Hudson</h2>
                      <p>
                        🚲 11 miles (start at{" "}
                        <a href="https://goo.gl/maps/ZxeYzys7iKVo5ioK6">
                          Germantown
                        </a>{" "}
                        at 9:30am)
                      </p>
                      <p>
                        Rally at 11:00am at{" "}
                        <a href="https://goo.gl/maps/MPSHistSM16jb2iN6">
                          Basilica Hudson, Hudson
                        </a>
                      </p>
                      <p>🚲 29 miles to East Greenbush</p>
                      <Img
                        src="06_CCW_MarchRally_Hudson_421.jpg"
                        alt="Graphic for 4/21 Rally"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h2 id="22">4/22: Albany</h2>
                      <p>
                        🚲 3.5 miles (start at{" "}
                        <a href="https://goo.gl/maps/t9XqAg73y7MT3mTL7">
                          East Greenbush
                        </a>{" "}
                        at 10:30am)
                      </p>
                      <p>
                        Rally at 11:00am at{" "}
                        <a href="https://goo.gl/maps/Y6eaQRPDc3PKQ7G37">
                          Hudson River Way, Albany
                        </a>
                      </p>
                      <p>🥁 1 mile</p>
                      <p>
                        Rally at 12:00pm at{" "}
                        <a href="https://goo.gl/maps/7FEASMtYjVJHzoRU9">
                          West Capitol Park, Albany
                        </a>
                      </p>
                      <Img
                        src="/4-22_albany.jpg"
                        alt="Graphic for 4/22 Rally"
                      />
                    </div>
                  </li>
                </ul>
              </TimelineSection>
            </>
          }
          id="trek-schedule"
        />
        <MiddleBlock
          title=""
          content={
            <Img src="EarthWeek-BikeTrek.jpg" alt="Graphic for Bike Trek" />
          }
          id="intro"
        />
      </Container>
    </>
  );
};

export default BikeTrek;
