import svglogo from "../../images/levfestlogo.svg";
import herobg from "../../images/hero1.jpg";

import HeroContainer from "../../components/card/FrontPage/HeroContainer/HeroContainer";
import FrontPageBigCard from "../../components/card/FrontPage/FrontPageBigCard/FrontPageBigCard";
import FrontPageEventDataCard from "../../components/card/FrontPage/FrontPageEventDataCard/FrontPageEventDataCard";
import FrontPageNewsDataCard from "../../components/card/FrontPage/FrontPageNewsDataCard/FrontPageNewsDataCard";
import FrontPageVenueDataCard from "../../components/card/FrontPage/FrontPageVenueDataCard/FrontPageVenueDataCard";

function FrontPage({
  event_bg,
  news_bg,
  venue_bg,
  introText,
  event_highlights,
  latestNews,
  venueHighlights,
}) {
  return (
    <>
      <HeroContainer logosource={svglogo} text={introText} IMGsource={herobg} />
      <div className="front_page__cards">
        {/* card wrapper */}

        <div id="itemOne">
          <FrontPageBigCard
            title="Whats On This Year"
            text="What is On This Year then"
            bottomText="events"
            link="/events"
            IMGsource={event_bg}
            IMGaltText="alt text is - What's On This Year"
            IMGtype="coverSpace"
          />
          <FrontPageEventDataCard event_highlights={event_highlights} />
        </div>
        <div id="itemTwo">
          <FrontPageBigCard
            title="What's Happening"
            text=" What's going on now"
            bottomText="news"
            link="/news"
            IMGsource={news_bg}
            IMGaltText="alt text is - What's going on now"
            IMGtype="coverSpace"
          />
          <FrontPageNewsDataCard latestNews={latestNews} />
        </div>
        <div id="itemThree">
          <FrontPageBigCard
            title="Where is it happening"
            text=" What's On Where"
            bottomText="venues"
            link="/venues"
            IMGsource={venue_bg}
            IMGaltText="alt text is - What's On Where"
            IMGtype="coverSpace"
          ></FrontPageBigCard>
          <FrontPageVenueDataCard venueHighlights={venueHighlights} />
        </div>
      </div>
    </>
  );
}

export default FrontPage;
