import React, {useState, useEffect} from "react";

import "./home.css";
import player from "../player.png";
import player2 from "../player2.png";
import player3 from "../player3.png";

function Home() {
  const photos = [player, player2, player3];
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const handlePrev = () => {
    setCurrentPhoto((currentPhoto + photos.length - 1) % photos.length);
  };

  const handleNext = () => {
    setCurrentPhoto((currentPhoto + 1) % photos.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentPhoto]);
  return (
    <div className="home">
      <h1 className="title">Home Football</h1>
      <h2 className="subtitle">Welcome to our page</h2>
      <div className="photo-cover">
        <div className="photo-slider">
          <img src={photos[currentPhoto]} alt="Photo" />
          <div className="arrows">
            <button onClick={handlePrev}>{"<"}</button>
            <button onClick={handleNext}>{">"}</button>
          </div>
        </div>
      </div>
      <div className="moving">
        <span className="moving-text">
          we are best football site for shoping and football news
        </span>
      </div>
    </div>
  );
}

export default Home;
