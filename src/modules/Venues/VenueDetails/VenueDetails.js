import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VenueDetail from "./VenueDetail/VenueDetail";
import Loader from "../../../components/Loader/Loader";
function VenueDetails({ eventListData }) {
  let { id } = useParams();

  const venueEvents = eventListData.filter(
    (event) => event.event_venue_id === id
  );
  // filter the events list to events at this venue

  const {
    data: venueData,
    isLoading: isLoadingVD,
    error: errorVD,
  } = useQuery(["EventData", id], async () => {
    const baseUrl = "https://www.levenshulmecommunityfestival.co.uk/";
    const apiUrl = "api_venues_long?venue_id=";
    const url = baseUrl + apiUrl + id;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoadingVD) {
    return <Loader />;
  }
  if (errorVD) {
    console.log("Oh no, something went wrong with getting the venue");
  }

  if (venueData) {
    return <VenueDetail data={venueData[0]} venueEvents={venueEvents} />;
  } else {
    return <Loader />;
  }
}

export default VenueDetails;
