import NewsList from "../modules/News/NewsList/NewsList";
import Pagetop from "../components/utility/PageTop/Pagetop";
function News({ newsListData }) {
  return (
    <div className="content">
      <Pagetop />
      <h1 className="page_h1">Latest News about the Levenshulme Festival</h1>
      <NewsList newsListData={newsListData} />
    </div>
  );
}

export default News;
