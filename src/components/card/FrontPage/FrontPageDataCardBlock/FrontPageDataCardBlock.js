import React from "react";
import { Link } from "react-router-dom";
import DateTime from "../../../text/DateTime/DateTime";
import "./FrontPageDataCardBlock.css";
import ImageContainer from "../../../image/ImageContainer/ImageContainer";
function FrontPageDataCardBlock(props) {
  return (
    <Link to={`/${props.link}/${props.id}`}>
      <div className="front_page_data_card_block">
        <div className="front_page_data_card_block_image box_drop_shadow">
          <ImageContainer
            type="square"
            source={props.image}
            altText={props.title}
          />
        </div>

        <div className="front_page_data_card_block_text">
          <h3>{props.title}</h3>

          {props.date ? <DateTime date={props.date} /> : null}

          {/* date={event.event_date_time} */}
          {props.venue ? <p>At {props.venue}</p> : null}
          {props.newsintro ? <p>{props.newsintro}</p> : null}
          {/* too much text */}
        </div>
      </div>
    </Link>
  );
}

export default FrontPageDataCardBlock;
