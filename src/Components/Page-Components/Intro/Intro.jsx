import React from 'react'
import "../_Global-Page-Styles/GlobalPageStyles.css"

import ContactButton from '../Main-Button/ContactButton'

const Intro = () => {
  return (
    <div className="Page-Section Intro-Section">
        <div className="Header-Container">
            <h1 className="Header-Text">
                Hi, I'm <br /> Daniel <span className='Red-Letter'>R</span>ook
            </h1>
            <p className="Job-Title">
                <span className='Red-Letter'>-</span> Frontend Web Developer
            </p>    
            <ContactButton />
        </div>

    </div>
  )
}

export default Intro