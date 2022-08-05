import React from 'react'

import "./Styles/Landing.css"


import Intro from '../../Components/Page-Components/Intro/Intro';
import Portfolio from '../../Components/Page-Components/Portfolio/Portfolio';
import { About } from '../../Components/Page-Components/About/About';
import { Contact } from '../../Components/Page-Components/Contact/Contact';

const LandingPage = () => {
  return (
    <div className='Landing-Wrapper'>
        <Intro />
        <Portfolio />
        <About />
        <Contact />
    </div>
  )
}

export default LandingPage