import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const festivalQueryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={festivalQueryClient}>
      <TestFetch />
    </QueryClientProvider>
  );
}

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
