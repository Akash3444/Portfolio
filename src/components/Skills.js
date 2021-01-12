import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      img: "javascript",
    },
    {
      name: "React.js",
      img: "reactjs",
    },
    {
      name: "Redux",
      img: "redux",
    },
    {
      name: "Node.js",
      img: "nodejs",
    },
    {
      name: "Express",
      img: "expressjs",
    },
    {
      name: "HTML5",
      img: "html5",
    },
    {
      name: "CSS3",
      img: "css3",
    },
    {
      name: "Bootstrap 4",
      img: "bootstrap",
    },
  ];

  return (
    <div className="skills">
      <h1>
        <span>&mdash;</span> Skills <span>&mdash;</span>
      </h1>
      <div className="skill__wrapper">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill__img">
              <img src={`${skill.img}.svg`} height="80" alt={skill.name} />
            </div>
            <h4 className="skill__name">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
