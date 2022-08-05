import React, {useState} from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import './App.css';

import SideBar from './Components/SideBar/SideBar';
import MobileMenu from './Components/Mobile-Menu/MobileMenu';
import LandingPage from './Views/Landing/LandingPage';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
