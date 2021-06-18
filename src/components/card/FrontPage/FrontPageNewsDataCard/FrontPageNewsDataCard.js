import { fetchNewsListData } from "../../../../utilities/fetchData/FetchData";
import { useQuery } from "react-query";
import "./FrontPageNewsDataCard.css";
import FrontPageDataCardBlock from "../FrontPageDataCardBlock/FrontPageDataCardBlock.js";

function FrontPageNewsDataCard() {
  const { data } = useQuery("NewsListData", fetchNewsListData);
  if (!data) {
    return null;
  } else {
    let size = 4;
    const latestNews = data.slice(0, size);

    return (
      <div className="front_page_event_data_cards">
        {latestNews.map((newsitem) => {
          return (
            <FrontPageDataCardBlock
              key={newsitem.id}
              id={newsitem.id}
              link={"news"}
              title={newsitem.news_title}
              image={newsitem.news_image_1}
              newsintro={newsitem.news_introduction}
            />
          );
        })}
      </div>
    );
  }
}

export default FrontPageNewsDataCard;
