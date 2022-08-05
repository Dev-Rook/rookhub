import React from 'react'
// import { Link } from 'react-router-dom';


import "./Styles/SideBarStyles.css"

const SideBar = ({showMenu, showMenuFunction}) => {
  return (
    <div className="Side-Bar">
        <div className="Logo-Container">
            <img src={require("../../Assets/Images/SideBar-Logo-1.jpg")} alt="" className="Side-Bar-Logo" />
        </div>

        <ul className="NavLink-Container">
            <li className='NavLink-item'>
                <a href='#' className='NavLink'>
                    About
                </a>
            </li>
            <li className='NavLink-item'>
                <a href='#' className='NavLink'>
                    Portfolio
                </a>
            </li>
            <li className='NavLink-item'>
                <a href='#' className='NavLink'>
                    Contact
                </a>
            </li>
            <li className='NavLink-item'>
                <a href='#' className='NavLink DevLogs'>
                    Dev Logs
                </a>
            </li>
        </ul>

        <div className="Social-Icon-Bar">
            <div className="Social-Icon-Container">
                
            </div>
            <div className="Social-Icon-Container">

            </div>
            <div className="Social-Icon-Container">

            </div>
        </div>
    </div>
  )
}

export default SideBar