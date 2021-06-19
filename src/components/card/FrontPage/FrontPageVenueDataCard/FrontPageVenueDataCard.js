import "./FrontPageVenueDataCard.css";
import FrontPageDataCardBlock from "../FrontPageDataCardBlock/FrontPageDataCardBlock.js";
function FrontPageVenueDataCard({ venueHighlights }) {
  return (
    <div className="front_page_venue_data_cards">
      {venueHighlights.map((venue) => {
        return (
          <FrontPageDataCardBlock
            key={venue.id}
            id={venue.id}
            link={"venues"}
            title={venue.venue_title}
            image={venue.venue_image_1}
            introduction={venue.venue_introduction}
          />
        );
      })}
    </div>
  );
}

export default FrontPageVenueDataCard;
