import { useQuery } from "react-query";
import { fetchFestivalData } from "../../utilities/fetchData/FetchData";
import svglogo from "../../images/levfestlogo.svg";
import herobg from "../../images/hero1.jpg";
import HeroContainer from "../../components/card/FrontPage/HeroContainer/HeroContainer";
import FrontPageBigCard from "../../components/card/FrontPage/FrontPageBigCard/FrontPageBigCard";
import FrontPageEventDataCard from "../../components/card/FrontPage/FrontPageEventDataCard/FrontPageEventDataCard";
import FrontPageNewsDataCard from "../../components/card/FrontPage/FrontPageNewsDataCard/FrontPageNewsDataCard";
import FrontPageVenueDataCard from "../../components/card/FrontPage/FrontPageVenueDataCard/FrontPageVenueDataCard";
import Loader from "../../components/Loader/Loader";

function FrontPage() {
  let festival;
  const { data } = useQuery("BasicFestivalData", fetchFestivalData);
  data ? (festival = data[0]) : (festival = {});

  return (
    <>
      <HeroContainer
        logosource={svglogo}
        text={festival ? festival.festival_intro : null}
        IMGsource={herobg}
      />
      <div className="front_page__cards">
        {/* card wrapper */}

        <div id="itemOne">
          <FrontPageBigCard
            title="Whats On This Year"
            text="What is On This Year then"
            bottomText="events"
            link="/events"
            IMGsource={festival ? festival.event_header_bg_image : null}
            IMGaltText="alt text is - What's On This Year"
            IMGtype="coverSpace"
          />
          <FrontPageEventDataCard />
        </div>
        <div id="itemTwo">
          <FrontPageBigCard
            title="What's Happening"
            text=" What's going on now"
            bottomText="news"
            link="/news"
            IMGsource={festival ? festival.news_header_bg_image : null}
            IMGaltText="alt text is - What's going on now"
            IMGtype="coverSpace"
          />
          <FrontPageNewsDataCard />
        </div>
        <div id="itemThree">
          <FrontPageBigCard
            title="Where is it happening"
            text=" What's On Where"
            bottomText="venues"
            link="/venues"
            IMGsource={festival ? festival.venue_header_bg_image : null}
            IMGaltText="alt text is - What's On Where"
            IMGtype="coverSpace"
          ></FrontPageBigCard>
          <FrontPageVenueDataCard />
        </div>
      </div>
    </>
  );
}

export default FrontPage;
