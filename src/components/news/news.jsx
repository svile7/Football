import "./news.scss";
import {useNavigate} from "react-router-dom";

import newsItems from "../../json/news.json";

const News = () => {
  const navigation = useNavigate();

  const goToNewsDescriptionHandler = (newsItem) => {
    navigation(
      `/descriptions?title=${newsItem.title}&image=${newsItem.image}&description=${newsItem.description}`
    );
  };

  return (
    <div>
      <h1>News</h1>

      <div className="news-container">
        {newsItems.news.map((newsItem) => (
          <div
            className="news-item"
            key={newsItem.title}
            onClick={() => goToNewsDescriptionHandler(newsItem)}
          >
            <img src={newsItem.image} alt={newsItem.title} />
            <h2>{newsItem.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
