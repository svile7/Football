import React from "react";
import "./googleMap.scss";

const GoogleMapApp = () => {
  return (
    <iframe
      className="google-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
      style={{border: 0}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMapApp;

//const apiKey = "AIzaSyBNZvtSuxcHkZ8K_TQy_sG_j1_S1fBPvGY";
