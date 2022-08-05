import React from "react";
import "../_Global-Page-Styles/GlobalPageStyles.css";
import "./Styles/About.css";

export const About = () => {
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
          This is just text to fill a blank area because I lack the enthusiasm{" "}
          <br /> at the moment to actually dive deep into my narcissistic
          potential to <br /> over exaggerate what I can actually do.
        </p>

        <p className="Section-Description">
          This is just text to fill a blank area because I lack the enthusiasm{" "}
          <br /> at the moment to actually dive deep into my narcissistic
          potential to <br /> over exaggerate what I can actually do.
        </p>
      </div>

      <div className="Experience-Container">
        
      </div>
    </div>
  );
};
