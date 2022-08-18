import React from "react";

import "./Styles/Project.css";

const Project1 = () => {
  return (
    <div className="Project-Wrapper">
      <div className="Info-Section">
        <p className="Job-Title">Frontend Web Developer</p>

        <h2 className="Project-Title">Snapchat Landing Page</h2>

        <div className="Tools-Container">
          <div className="Tool">
            <p className="Tool-Text">React JS</p>
          </div>
          <div className="Tool">
            <p className="Tool-Text">Bootstrap</p>
          </div>
          <div className="Tool">
            <p className="Tool-Text">AOS</p>
          </div>
          <div className="Tool">
            <p className="Tool-Text">Stack</p>
          </div>
          <div className="Tool">
            <p className="Tool-Text">Stack</p>
          </div>
          <div className="Tool">
            <p className="Tool-Text">Stack</p>
          </div>
        </div>

        <img
          src={require("../../Assets/Images/Project Snapshots/Snapchat-Landing.jpg")}
          alt=""
          className="Responsive-Project-Image"
        />

        <div className="Description">
          The goal of this project was to clone the lanading page of the snapchat website. My attempt thought me, managing my time and planning out projects before any attempts were futile for a successful project. 
        </div>

        <div className="Code--Demo">
          <a target={"_blank"} href="" className="C--D">
            Code
          </a>

          <a target={"_blank"} href="https://dev-rook-snapchat-clone.netlify.app/" className="C--D">
            Demo
          </a>
        </div>
      </div>

      <div className="Display-Image-Container">
        <img
          src={require("../../Assets/Images/Project Snapshots/Snapchat-Landing.jpg")}
          alt=""
          className="Project-Image"
        />
      </div>
    </div>
  );
};

export default Project1;
