import "./news-description.scss";
import queryString from "query-string";
import {useLocation} from "react-router-dom";

const Description = () => {
  const location = useLocation();
  const {title, image, description} = queryString.parse(location.search);

  return (
    <div className="description-boss">
      <div className="description-container">
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Description;
