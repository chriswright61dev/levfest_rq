import { useQuery } from "react-query";
import EventCard from "../../../components/card/EventCard/EventCard";
import { hasDatePassed } from "../../../utilities/utilities";
import Loader from "../../../components/Loader/Loader";
import { fetchEventListData } from "../../utilities/fetchData/FetchData";
function EventsList() {
  const { data } = useQuery("AllEventsListData", fetchEventListData);

  if (!data) {
    return <Loader />;
  } else {
    return (
      <div className="events">
        {data.map((event) => {
          return (
            <EventCard
              old={hasDatePassed(event.event_date_time)}
              key={event.id}
              id={event.id}
              link={"events"}
              title={event.event_title}
              name={event.event_name}
              date={event.event_date_time}
              venue={event.event_venue}
              venue_id={event.event_venue_id}
              introduction={event.event_introduction}
              time={event.event_time_text}
              image_1={event.event_image_1}
            />
          );
        })}
      </div>
    );
  }
}

export default EventsList;
