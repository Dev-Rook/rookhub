import React from 'react'
import "../_Global-Page-Styles/GlobalPageStyles.css"

import ViewMoreButton from '../Main-Button/ViewMoreButton' 

const Portfolio = () => {
  return (
    <div className="Page-Section">
        <div className="Header-Container">
            <h1 className="Header-Text">
                My <span className='Red-Letter'>P</span>ortfolio
            </h1>

            <p className="Section-Description">
                <span className='Red-Letter'>-</span> These are a handfull of projects hand picked by me.
            </p>
            
            <ViewMoreButton />
        </div>

    </div>
  )
}

export default Portfolio