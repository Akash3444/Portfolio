import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__me">
        <h2> Akash Moradiya </h2>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"
          alt="avatar"
          width="200"
        />
        <p>
          I am a web developer. Web development is my passion. I can make
          websites with HTML, CSS, JavaScript, React.js, Node, and Express.js.
        </p>
      </div>
      <div className="about__img">
        <div className="about__img--wrapper">
          <img
            src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630__340.png"
            alt="web dev"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
