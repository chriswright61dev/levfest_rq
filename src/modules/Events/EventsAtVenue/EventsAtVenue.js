import "./EventsAtVenue.css";
import EventCard from "../../../components/card/EventCard/EventCard";
function EventsAtVenue({ venueEvents }) {
  return (
    <div className="eventsInVenue">
      {venueEvents.map((event) => {
        return (
          <EventCard
            key={event.id}
            id={event.id}
            link={"events"}
            title={event.event_title}
            name={event.event_name}
            date={event.event_date_time}
            introduction={event.event_introduction}
            time={event.event_time_text}
            image_1={event.event_image_1}
          />
        );
      })}
    </div>
  );
}

export default EventsAtVenue;
