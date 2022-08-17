import React, { useState } from "react";
import "../../Components/Page Components/_Global-Page-Styles/GlobalPageStyles.css";
import "./Styles/About.css";

import ExperienceCard from "../../Components/Custom Api/ExpericenceCard";

export const About = () => {
  const [experienceCard, setExperinceCard] = useState(ExperienceCard);

  return (
    <div className="Page-Section About-Section">
      <div className="Header-Container">
        <h1 className="Header-Text">
          About <br /> Daniel <span className="Red-Letter">R</span>ook
        </h1>

        <div className="Job-Title">
          <a href="#">
            <span className="Red-Letter">- Resume</span>
          </a>
        </div>

        <p className="Section-Description">
        Begun my programing adventure in 2017. Currently I specialize in <br /> frontend Web Development. My experience so far has gotten my <br /> entangled with: Html, CSS, Sass and JavaScript.
        </p>

        <p className="Section-Description">
        My main tool is: React Js. With It, I am able to produce, with the aid <br /> of libraries, projects based off established designs or on occasion, <br /> based off my own designs.
        </p>
      </div>

      <div className="Experience-Container">
        {experienceCard.map((value) => {
          const { id, Image } = value;

          return (
            <div className="Experience-Card" key={id}>
              <img src={Image} alt="" className="Card-Logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
