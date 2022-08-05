import React, {useState} from 'react'
import "../_Global-Page-Styles/GlobalPageStyles.css"
import "./Styles/Portfolio.css"

import ViewMoreButton from '../Main-Button/ViewMoreButton' 
import Card from '../../Custom Api/Card'

const Portfolio = () => {

  const [projectCard, setProjectCard] = useState(Card);

  const filterProjectCards = (type) => {
    const result = Card.filterProjectCards((currentCards) => {
      return currentCards.Type === type;
    });
    setProjectCard(result)
  };


  return (
    <div className="Page-Section Portfolio-Section">
        <div className="Header-Container">
            <h1 className="Header-Text">
                My <span className='Red-Letter'>P</span>ortfolio
            </h1>

            <p className="Section-Description">
                <span className='Red-Letter'>-</span> This is a small collection of recents projects hand picked by me. <br /> I have done them solo or in collaboration with other developers and or teams.
            </p>
            
            <ViewMoreButton />
        </div>

        <div className="Portfolio-Container">
          {projectCard.map((value) => {
            const {Title, Image, Description, Code, Demo, Type, Status, id} = value;

            return (
              <div className="Project-Card" key={id}>
              <img src={Image} alt="" className="Card-Display-Image" />
  
              <div className="Card-Details">
                <h3 className="Card-Title">{Title}</h3>
                <p className="Card-Type">{Type}</p>
                <p className="Card-Description">{Description}</p>
  
                <div className="Code-Or-Demo-Container">
                  <a href={Code} target="_blank" id="Project-Link-Code">
                    Code
                  </a>
                  <a href={Demo} target="_blank" id="Project-Link-Demo">
                    Demo
                  </a>
                </div>
  
                <p className="Status">
                  {Status}
                </p>
              </div>
            </div>
            )
          })}
        </div>

    </div>
  )
}

export default Portfolio