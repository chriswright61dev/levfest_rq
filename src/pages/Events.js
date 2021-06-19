import EventsList from "../modules/Events/EventsList/EventsList";
import Pagetop from "../components/utility/PageTop/Pagetop";
function Events({ eventListData }) {
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">Levenshulme Festival Events </h1>
      <EventsList eventListData={eventListData} />
    </div>
  );
}

export default Events;
