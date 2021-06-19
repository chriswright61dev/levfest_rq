import { Link } from "react-router-dom";
import "./NewsCard.css";
import ImageContainer from "../../image/ImageContainer/ImageContainer";
function NewsCard(props) {
  return (
    <div className="venue_card">
      <Link to={`/${props.link}/${props.id}`}>
        <div className="news_card__text_top">
          <h2>{props.title}</h2>
        </div>
        <div className="news_card__text_bottom">
          <p> {props.introduction}</p>
        </div>
        <ImageContainer
          type="square"
          source={props.image_1}
          altText={props.title}
        />

        <p> {props.id}</p>
      </Link>
    </div>
  );
}

export default NewsCard;
