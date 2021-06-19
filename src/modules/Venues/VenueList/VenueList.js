import VenueCard from "../../../components/card/VenueCard/VenueCard";
import "./VenueList.css";
function VenueList({ venueListData }) {
  return (
    <div className="venues">
      {venueListData.map((venue) => {
        return (
          <VenueCard
            key={venue.id}
            id={venue.id}
            link={"venues"}
            title={venue.venue_title}
            introduction={venue.venue_introduction}
            // postcode={venue.venue_address_4}
            image_1={venue.venue_image_1}
          />
        );
      })}
    </div>
  );
}

export default VenueList;
