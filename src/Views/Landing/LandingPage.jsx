import React from 'react'

import "./Styles/Landing.css"


import Intro from '../../Components/Page-Components/Intro/Intro'
import Portfolio from '../../Components/Page-Components/Portfolio/Portfolio'

const LandingPage = () => {
  return (
    <div className='Landing-Wrapper'>
        <Intro />
        <Portfolio />
    </div>
  )
}

export default LandingPage