import React from "react";
import GoogleMapApp from "../../googleMap/googleMap";
import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="text-container">
        <h1>About us</h1>
        <h3>
          We are a football website that provides the latest information about
          football clubs. We are always up to date with the latest happenings.
        </h3>
      </div>

      <div className="map-app">
        <div className="map-text">
          <p>&bull; Dos Mas</p>
          <p>&bull; 50 Circuit Ave, Oak Bluffs, MA 02557 </p>

          <p>&bull; Kontakt number: 0034321321</p>

          <p>
            &bull; email: <a>svile007@gmail.com</a>
          </p>
        </div>

        <GoogleMapApp />
      </div>
    </div>
  );
};

export default AboutUs;
