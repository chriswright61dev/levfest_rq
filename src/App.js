import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
// data queries
const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

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
          <Redirect to="/" />
          {/* redirect invalid paths */}
        </Switch>
        <Footer />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
