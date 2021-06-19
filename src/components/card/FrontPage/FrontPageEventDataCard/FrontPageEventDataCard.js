import "./FrontPageEventDataCard.css";
import FrontPageDataCardBlock from "../FrontPageDataCardBlock/FrontPageDataCardBlock.js";
function FrontPageEventDataCard({ event_highlights }) {
  return (
    <div className="front_page_event_data_cards">
      {event_highlights.map((event) => {
        return (
          <FrontPageDataCardBlock
            key={event.id}
            id={event.id}
            link={"events"}
            title={event.event_title}
            // name={event.event_name}
            date={event.event_date_time}
            venue={event.event_venue}
            // venue_id={event.event_venue_id}
            introduction={event.event_introduction}
            // time={event.event_time_text}
            image={event.event_image_1}
          />
        );
      })}
    </div>
  );
}

export default FrontPageEventDataCard;
