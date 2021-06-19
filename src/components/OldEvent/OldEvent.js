import React from "react";
import "./OldEvent.css";
import ShowYear from "../text/ShowYear/ShowYear";
import ShowMonth from "../text/ShowMonth/ShowMonth";
function OldEvent(props) {
  return (
    <div className="old_event">
      <p>
        {" "}
        This is an OLD event from <ShowMonth date={props.date} />{" "}
        <ShowYear date={props.date} />
      </p>
    </div>
  );
}

export default OldEvent;
