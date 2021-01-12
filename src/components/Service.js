import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="service">
      <div className="service__graphic">
        <img src="webdev.svg" alt="Web development" />
      </div>
      <div className="service__info">
        <h2 className="service__title">Web Development</h2>
        <p className="service__detail">
          Web development is the work involved in developing a Web site for the
          Internet (World Wide Web) or an intranet (a private network)
        </p>
        <button className="btn__outlined">Hire Me</button>
      </div>
    </div>
  );
};

export default Service;
