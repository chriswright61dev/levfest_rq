import Pagetop from "../components/utility/PageTop/Pagetop";
import VenueList from "../modules/Venues/VenueList/VenueList";
function Venues({ venueListData }) {
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">Levenshulme Festival Venues</h1>
      <VenueList venueListData={venueListData} />
    </div>
  );
}

export default Venues;
