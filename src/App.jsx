import React, {useState} from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import './App.css';

import SideBar from './Components/SideBar/SideBar';
import LandingPage from './Views/Landing/LandingPage';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const showMenuFucnction = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <>
      <BrowserRouter>
        <SideBar showMenu={showMenu} showMenuFucnction={showMenuFucnction} />
        <img src={require("./Assets/Icons/Mobile-Menu-Icon.png")} alt="" className="Mobile-Menu-Icon" />

        <Routes>
          <Route path='/' element={<LandingPage />} />   
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
