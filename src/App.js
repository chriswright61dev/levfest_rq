import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

const festivalQueryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/events" exact>
          <Events />
        </Route>
        <Route path="/events/:id">
          <Event />
        </Route>
        <Route path="/events_old" exact>
          <EventsOld />
        </Route>
        <Route path="/news" exact>
          <News />
        </Route>
        <Route path="/news/:id">
          <NewsItem />
        </Route>
        <Route path="/venues" exact>
          <Venues />
        </Route>
        <Route path="/venues/:id" exact>
          <Venue />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

<QueryClientProvider client={festivalQueryClient}>
  <TestFetch />
</QueryClientProvider>;

export default App;

function TestFetch() {
  //festivalData is a key to track the query
  const { isLoading, error, data } = useQuery("festivalData", () =>
    fetch(
      "https://www.levenshulmecommunityfestival.co.uk/api_levfest_basic_data"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  const festival = data[0];
  console.log(data[0]);
  return (
    <div>
      <h1>{festival.festival_title}</h1>
      <p>{festival.festival_logo}</p>
      <p>{festival.festival_intro}</p>
    </div>
  );
}
