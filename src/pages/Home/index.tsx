import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
// import ContactContent from "../../content/ContactContent.json";
import BillsInfo from "../../content/BillsInfo.json";

// const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const VideoContainer = lazy(() => import("../../components/VideoContainer"));
const FullBleedContainer = lazy(
  () => import("../../components/FullBleedContainer")
);

/*
"title": "Climate Can't Wait 2022",
  "button": "Join Us"
*/

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <FullBleedContainer
        backgroundImage="/Craig-Fildes-capitol.jpeg"
        backgroundColor="#FFFF80"
      >
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="ccw2022_logo_color.svg"
          id="intro"
          scrollTarget="about"
        />
      </FullBleedContainer>
      <FullBleedContainer backgroundColor="#fff">
        <VideoContainer>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/ek4XFjGYESo"
            title="video player for 'Climate Can't Wait 2022 Introduction'"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoContainer>
      </FullBleedContainer>
      <Container>
        <MiddleBlock
          title={
            <>
              Pass the <span style={{ color: "red" }}>Climate Can't Wait</span>{" "}
              2022 Package!
            </>
          }
          content={
            <>
              <p>
                It’s been over two years since New York has passed significant
                legislation addressing the climate crisis. In that time, the
                climate emergency has accelerated, with increased extreme heat,
                fires, storms, and floods. Just this summer, Hurricane Ida took
                the lives of 42 New Yorkers.
              </p>
              <p>
                <b>We demand</b> that the New York State Legislature and
                Governor Hochul <b>fulfill the promises</b> of the Climate
                Leadership and Community Protection Act (CLCPA), listen to the
                vast majority of New Yorkers who{" "}
                <b>support bold climate policies</b>, and
                <b> take action</b> in 2022 by passing twelve urgently needed
                climate bills.
              </p>
            </>
          }
          button={AboutContent.button}
          id="about"
        />
        <ContentBlock
          type="left"
          title={BillsInfo.title}
          content={
            <>
              Climate Can't Wait 2022 has put together a bold package of 11
              bills and one proposal to further climate justice in New York.{" "}
              <a href="/bills">Click here to learn more.</a>
            </>
          }
          button={BillsInfo.button}
          icon="ccw2022_logo_color.svg"
          id="intro"
          scrollTarget="contact"
        />
        {/* <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        /> */}
      </Container>
    </>
  );
};

export default Home;
