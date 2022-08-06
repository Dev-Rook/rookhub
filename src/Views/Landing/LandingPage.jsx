import React from 'react'

import "./Styles/Landing.css"


import Intro from '../Intro/Intro';
import Portfolio from '../Portfolio/Portfolio';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';

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