import { useState } from "react";
import { useQuery } from "react-query";
import "./EventsOldList.css";
import EventsOldListDisplay from "./EventsOldListDisplay/EventsOldListDisplay";
function EventsOldList() {
  // the year we are looking at
  const lastyear = new Date().getFullYear() - 1; // last year
  const [eventYearState, setEventYearState] = useState({
    year: lastyear,
  });
  console.log("eventYearState.year", eventYearState.year);
  function handleYearChange(event) {
    setEventYearState({
      year: event.target.value,
    });
  }

  const {
    data: oldEventListData,
    isLoading: isLoadingOldEventsList,
    error: errorOldEventsList,
  } = useQuery(["EventListData", eventYearState.year], async () => {
    const baseUrl = "https://www.levenshulmecommunityfestival.co.uk/";
    const apiUrl = "api_levfest_events_list/";
    const url = baseUrl + apiUrl + eventYearState.year;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  console.log("oldEventListData", oldEventListData);
  console.log("isLoadingOldEventsList", isLoadingOldEventsList);
  console.log("errorOldEventsList", errorOldEventsList);
  return (
    <div className="events_old">
      <select
        className="select_year"
        name="year"
        id="year-select"
        onChange={handleYearChange}
      >
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        {/* there is no data for 2019 */}
      </select>

      <EventsOldListDisplay events={oldEventListData} />
    </div>
  );
}

export default EventsOldList;
