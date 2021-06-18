// import React from "react";
import { DateFormat } from "../../utilities/utilities";

function ShowYear(props) {
  if (props.date) {
    const formattedDate = DateFormat(props.date);
    //  check that the Date Data exists
    // so split errors don't occur in the formatting funcyion
    return <>{formattedDate.year}</>;
  } else {
    return null;
  }
}

export default ShowYear;
