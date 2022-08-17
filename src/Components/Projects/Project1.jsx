import React from 'react'

import "./Styles/Project.css"

const Project1 = () => {
  return (
    <div className="Project-Wrapper">
        <div className="Info-Section">
            <p className="Job-Title">
                Frontend Web Developer
            </p>

            <h2 className="Project-Title">
                Hopewell Square
            </h2>

            <div className="Tools-Container">
                <div className="Tool">
                    <p className="Tool-Text">
                        Stack
                    </p>
                </div>
                <div className="Tool">
                    <p className="Tool-Text">
                        Stack
                    </p>
                </div>
                <div className="Tool">
                    <p className="Tool-Text">
                        Stack
                    </p>
                </div>
                <div className="Tool">
                    <p className="Tool-Text">
                        Stack
                    </p>
                </div>
                <div className="Tool">
                    <p className="Tool-Text">
                        Stack
                    </p>
                </div>
                <div className="Tool">
                    <p className="Tool-Text">
                        Stack
                    </p>
                </div>
            </div>

            <img src={require("../../Assets/Images/Map.jpg")} alt="" className="Responsive-Project-Image" />

            <div className="Description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, numquam. Quo quam quaerat sequi omnis sunt corrupti rem delectus ut!
            </div>

            <div className="Code--Demo">
                <p className="C--D">
                    Code
                </p>

                <p className="C--D">
                    Demo
                </p>
            </div>
        </div>

        <img src={require("../../Assets/Images/Map.jpg")} alt="" className="Project-Image" />
    </div>
  )
}

export default Project1