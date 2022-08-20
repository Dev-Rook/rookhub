import React from "react";

import "./Styles/Project.css";

const Project1 = () => {
  return (
    <div className="Project-Wrapper">
      <div className="Info-Section">
        <p className="Job-Title">Frontend Web Developer</p>

        <h2 className="Project-Title">Patreon Landing Page</h2>

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
            <p className="Tool-Text">Material UI</p>
          </div>
          <div className="Tool">
            <p className="Tool-Text">Stack</p>
          </div>
          <div className="Tool">
            <p className="Tool-Text">Stack</p>
          </div>
        </div>

        <img
          src={require("../../Assets/Images/Project Snapshots/PatreonCloneNav.jpg")}
          alt=""
          className="Responsive-Project-Image"
        />

        <div className="Description">
          This project feature a cloned landing page of the Patreon website. I liked the genral design of it, especially the nav section when it transitioned into the mobile version. 
        </div>

        <div className="Code--Demo">
          <a target={"_blank"} href="https://github.com/Dev-Rook/patreon-clone" className="C--D">
            Code
          </a>

          <a target={"_blank"} href="https://patreonclone.vercel.app/" className="C--D">
            Demo
          </a>
        <p className="Status">Development</p>
        </div>
        
      </div>

      <div className="Display-Image-Container">
        <img
          src={require("../../Assets/Images/Project Snapshots/PatreonCloneNav.jpg")}
          alt=""
          className="Project-Image"
        />
      </div>
    </div>
  );
};

export default Project1;
