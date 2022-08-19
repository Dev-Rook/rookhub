import React from "react";

import "./Styles/Project.css";

const Project1 = () => {
  return (
    <div className="Project-Wrapper">
      <div className="Info-Section">
        <p className="Job-Title">Frontend Web Developer</p>

        <h2 className="Project-Title">Hopewell Square</h2>

        <div className="Tools-Container">
          <div className="Tool">
            <p className="Tool-Text">Stack</p>
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
          <div className="Tool">
            <p className="Tool-Text">Stack</p>
          </div>
          <div className="Tool">
            <p className="Tool-Text">Stack</p>
          </div>
        </div>

        <img
          src={require("../../Assets/Images/Map.jpg")}
          alt=""
          className="Responsive-Project-Image"
        />

        <div className="Description">
          This project is desinged to aid anyone in the small town of Hopewell, to find businesses and or contracters to fullfil services required. A system to become a service provider and promote one's self along with a payment system, is also being considered though out off my skillset at the moment.
          <br /><br />
          There are sections for businesses and contractors. Each will be displayed on cards in a carousel. However, when selected will bring you to a dedicated page with the sppropriate information.
        </div>

        <div className="Code--Demo">
        <a href="" className="C--D">
            Code
          </a>

          <a href="" className="C--D">
            Demo
          </a>
        </div>
      </div>

      <div className="Display-Image-Container">
        <img
          src={require("../../Assets/Images/Map.jpg")}
          alt=""
          className="Project-Image"
        />
      </div>
    </div>
  );
};

export default Project1;
