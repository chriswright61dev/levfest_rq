import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import NewsDetail from "./NewsDetail/NewsDetail";
import Loader from "../../../components/Loader/Loader";
function NewsDetails() {
  let { id } = useParams();

  const {
    data: newsData,
    isLoading: isLoadingND,
    error: errorND,
  } = useQuery(["EventData", id], async () => {
    const baseUrl = "https://www.levenshulmecommunityfestival.co.uk/";
    const apiUrl = "api_news_long?news_id=";
    const url = baseUrl + apiUrl + id;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoadingND) {
    return <Loader />;
  }
  if (errorND) {
    console.log("Oh no, something went wrong with getting the news item");
  }

  if (newsData) {
    return <NewsDetail data={newsData[0]} />;
  } else {
    return <Loader />;
  }
}

export default NewsDetails;
