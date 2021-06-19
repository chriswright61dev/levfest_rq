import { useQuery } from "react-query";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "./colours.css";
import Loader from "./components/Loader/Loader";
// ui
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import EventsOld from "./pages/EventsOld";
import Venues from "./pages/Venues";
import Venue from "./pages/Venue";
import News from "./pages/News";
import NewsItem from "./pages/NewsItem";
//queries
// basic data
import { fetchFestivalData } from "./utilities/fetchData/FetchData";
// import { fetchEventListData } from "./utilities/fetchData/FetchData";
import { fetchNewsListData } from "./utilities/fetchData/FetchData";
import { fetchVenuesListData } from "./utilities/fetchData/FetchData";
// const { data } = useQuery("SomeEventsListData", fetchEventListData);

// lists
function App() {
  const {
    data: festivalData,
    isLoading: isLoadingFD,
    error: errorFD,
  } = useQuery("FestivalData", fetchFestivalData);

  const year = new Date().getFullYear(); // this year
  const {
    data: eventListData,
    isLoading: isLoadingEventsList,
    error: errorEventsList,
  } = useQuery(["EventListData", year], async () => {
    const baseUrl = "https://www.levenshulmecommunityfestival.co.uk/";
    const apiUrl = "api_levfest_events_list/";
    const url = baseUrl + apiUrl + year;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  // const {
  //   data: eventListData,
  //   isLoading: isLoadingEventsList,
  //   error: errorEventsList,
  // } = useQuery("EventListData", fetchEventListData);

  const {
    data: newsListData,
    isLoading: isLoadingNewsList,
    error: errorNewsList,
  } = useQuery("NewsListData", fetchNewsListData);

  const {
    data: venueListData,
    isLoading: isLoadingVenuesList,
    error: errorVenuesList,
  } = useQuery("VenuesListData", fetchVenuesListData);

  if (isLoadingFD) {
    return <Loader />;
  }
  if (errorFD) {
    console.log("Oh no, something went wrong");
    // return "Oh no, something went wrong";
  }

  if (isLoadingEventsList) {
    return <Loader />;
    // console.log("loading");
  }
  if (errorEventsList) {
    console.log("Oh no, something went wrong with the Events");
    // return "Oh no, something went wrong";
  }

  if (isLoadingNewsList) {
    return <Loader />;
    // console.log("loading");
  }
  if (errorNewsList) {
    console.log("Oh no, something went wrong with the News");
    // return "Oh no, something went wrong";
  }

  if (isLoadingVenuesList) {
    return <Loader />;
    // console.log("loading");
  }
  if (errorVenuesList) {
    console.log("Oh no, something went wrong with the Venues");
  }

  const eventHighlights = eventListData.filter(
    (event) => event.event_highlight === "highlight"
  );

  let NewsPostSize = 4;
  const latestNews = newsListData.slice(0, NewsPostSize);

  const venueHighlights = venueListData.filter(
    (venue) => venue.venue_highlight === "highlight"
  );

  return (
    <Router>
      <Header
        title={festivalData[0].festival_title}
        dates={festivalData[0].festival_dates}
      />

      <Switch>
        <Route path="/" exact>
          <Home
            introText={festivalData[0].festival_intro}
            event_bg={festivalData[0].event_header_bg_image}
            news_bg={festivalData[0].news_header_bg_image}
            venue_bg={festivalData[0].venue_header_bg_image}
            event_highlights={eventHighlights}
            latestNews={latestNews}
            venueHighlights={venueHighlights}
          />
        </Route>
        <Route path="/events" exact>
          <Events eventListData={eventListData} />
        </Route>
        <Route path="/events/:id">
          <Event />
        </Route>
        <Route path="/events_old" exact>
          <EventsOld />
        </Route>
        <Route path="/news" exact>
          <News newsListData={newsListData} />
        </Route>
        <Route path="/news/:id">
          <NewsItem />
        </Route>
        <Route path="/venues" exact>
          <Venues venueListData={venueListData} />
        </Route>
        <Route path="/venues/:id" exact>
          <Venue eventListData={eventListData} />
        </Route>
        <Redirect to="/" />
        {/* redirect invalid paths */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
