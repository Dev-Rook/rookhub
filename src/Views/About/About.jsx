
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../Components/Page Components/_Global-Page-Styles/GlobalPageStyles.css";
import "./Styles/About.css";

import ExperienceCard from "../../Components/Custom Api/ExpericenceCard";

export const About = () => {


    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [experienceCard, setExperinceCard] = useState(ExperienceCard);

  return (
    <div className="Page-Section About-Section">
      <div className="Header-Container">
        <h1 data-aos="fade-right"data-aos-duration="1000" className="Header-Text">
          About <br /> Daniel <span className="Red-Letter">R</span>ook
        </h1>

        <div className="Job-Title">
          <a href="#">
            <span className="Red-Letter">- Resume</span>
          </a>
        </div>

        <div className="Section-Description">
        Begun my programing adventure in 2017. Currently I specialize in  frontend Web Development. My experience so far has gotten my  entangled with: Html, CSS, Sass and JavaScript.
        </div>

        <div className="Section-Description">
        My main tool is: React Js. With It, I am able to produce, with the aid  of libraries, projects based off established designs or on occasion,  based off my own designs.
        </div>
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


// Begun my programing adventure in 2017. Currently I specialize in frontend Web Development. My experience so far has gotten my entangled with: Html, CSS, Sass and JavaScript. My main tool is: React Js. With It, I am able to produce, with the aid of libraries, projects based off established designs or on occasion, based off my own designs.