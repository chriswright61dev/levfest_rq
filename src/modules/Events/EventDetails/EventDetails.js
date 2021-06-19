import { useQuery } from "react-query";
import { hasDatePassed } from "../../../utilities/utilities";
import { useParams } from "react-router-dom";
import EventDetail from "./EventDetail/EventDetail.js";
import Loader from "../../../components/Loader/Loader";

function EventDetails(props) {
  let { id } = useParams();

  const {
    data: eventData,
    isLoading: isLoadingED,
    error: errorED,
  } = useQuery(["EventData", id], async () => {
    const baseUrl = "https://www.levenshulmecommunityfestival.co.uk/";
    const apiUrl = "api_events_long?event_id=";
    const url = baseUrl + apiUrl + id;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoadingED) {
    return <Loader />;
  }
  if (errorED) {
    console.log("Oh no, something went wrong with getting the event");
  }

  if (eventData) {
    const HasEventPassed = hasDatePassed(eventData[0].event_date_time);
    return <EventDetail old={HasEventPassed} data={eventData[0]} />;
  } else {
    return <Loader />;
  }
}

export default EventDetails;
