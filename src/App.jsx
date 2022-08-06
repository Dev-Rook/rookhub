import React, {useState} from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import './App.css';

import SideBar from './Components/SideBar/SideBar';
import MobileMenu from './Components/Mobile-Menu/MobileMenu';

import LandingPage from './Views/Landing/LandingPage';
import { About } from './Views/About/About';
import Portfolio from './Views/Portfolio/Portfolio';
import { Contact } from './Views/Contact/Contact';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const showMenuFunction = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <SideBar showMenu={showMenu} showMenuFucnction={showMenuFunction} />
        <img onClick={showMenuFunction} src={require("./Assets/Icons/Mobile-Menu-Icon.png")} alt="" className="Mobile-Menu-Icon" />
        <MobileMenu showMenu={showMenu} />

        <Routes>
          <Route path='/' element={<LandingPage />} />   
          <Route path='About' element={<About />} />   
          <Route path='Portfolio' element={<Portfolio />} />   
          <Route path='/' element={<LandingPage />} />   
          <Route path='Contact' element={<Contact />} />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
