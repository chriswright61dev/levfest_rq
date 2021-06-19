import FrontPage from "../modules/FrontPage/FrontPage";
import Pagetop from "../components/utility/PageTop/Pagetop";
function Home({
  event_bg,
  news_bg,
  venue_bg,
  introText,
  event_highlights,
  latestNews,
  venueHighlights,
}) {
  const thisyear = new Date().getFullYear();
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">The Levenshulme Festival {thisyear}</h1>
      <FrontPage
        event_bg={event_bg}
        news_bg={news_bg}
        venue_bg={venue_bg}
        introText={introText}
        event_highlights={event_highlights}
        latestNews={latestNews}
        venueHighlights={venueHighlights}
      />
    </div>
  );
}

export default Home;
