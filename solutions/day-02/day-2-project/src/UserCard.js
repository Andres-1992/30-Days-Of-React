import React from "react";
import userImage from "./images/asabeneh.jpg";

const UserCard = () => {
  const webTechs = [
    "HTML",
    "CSS",
    "Sass",
    "JS",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "Flask",
    "Django",
    "NumPy",
    "Pandas",
    "Data Analysis",
    "MYSQL",
    "GraphicQL",
    "D3.js",
    "Gatsby",
    "Docker",
    "Heroku",
    "Git",
  ];
  const date = new Date().getFullYear();
  return (
    <div className="card--container">
      <div className="card--image__container">
        <figure>
          <img className="user--image" src={userImage} alt="Asabeneh Yetayeh" />
          <figcaption>
            <h4 className="card--name">Andres Lobo Roca</h4>
            <input type="checkbox" />
            <p className="card--info">senior developer, finland</p>
          </figcaption>
        </figure>
      </div>
      <h4>skills</h4>
      <div className="buttons--container">
        {webTechs.map((techs) => (
          <button className="btn" key={techs}>
            {techs}
          </button>
        ))}
      </div>
      <div className="date--container">
        <span className="fa-solid fa-clock"></span>
        <p>
          Joined on <time>{date}</time>
        </p>
      </div>
    </div>
  );
};

export default UserCard;