import React, {useState, useEffect} from 'react';
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

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
              setBackToTop(true)
          } else {
              setBackToTop(false)
          }
      })
  }, [])

  const scrollUp = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
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

      <img onClick={scrollUp} src={require("./Assets/Icons/Back-To-Top-icon.png")} alt="" className={backToTop ? "Back-To-Top Show-back-To-Top-Button" : "Back-To-Top"} />
    </div>
  );
}

export default App;
