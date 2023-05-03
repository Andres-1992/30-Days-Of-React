//index.js
// importing the react and react-dom package

import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";
import feTechnologies from "./images/frontend_technologies.png";
import UserCard from "./UserCard.js";
import "./styles/userCard.css";
import "./styles/main.css";
import InputForm from "./InputForm.js";

const user = (
  <div>
    <img src={asabenehImage} alt="asabeneh"></img>
  </div>
);
const technologies = (
  <div>
    <img className="technologies" src={feTechnologies} alt="technologies"></img>
  </div>
);
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Andres",
  lastName: "Lobo Roca",
};
const date = "Oct 1, 2020";

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);
const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);
// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <article className="subscribe--container">
        <InputForm></InputForm>
      </article>
      <article className="user--card">
        <UserCard />
      </article>
    </div>
  </main>
);
const copyRight = "Copyright 2020";

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two arguments
const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
