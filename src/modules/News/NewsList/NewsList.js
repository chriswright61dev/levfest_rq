import "./NewsList.css";

import NewsCard from "../../../components/card/NewsCard/NewsCard";
function NewsList({ newsListData }) {
  return (
    <div className="news">
      {newsListData.map((newsitem) => {
        return (
          <NewsCard
            key={newsitem.id}
            id={newsitem.id}
            link={"news"}
            title={newsitem.news_title}
            introduction={newsitem.news_introduction}
            image_1={newsitem.news_image_1}
          />
        );
      })}
    </div>
  );
}

export default NewsList;
