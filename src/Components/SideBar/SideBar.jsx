import React from 'react'
import { Link } from 'react-router-dom';


import "./Styles/SideBarStyles.css"

const SideBar = ({showMenu, showMenuFunction}) => {
  return (
    <div className="Side-Bar">
        <div className="Logo-Container">
            <img src={require("../../Assets/Images/SideBar-Logo-1.jpg")} alt="" className="Side-Bar-Logo" />
        </div>

        <ul className="NavLink-Container">
            <li className='NavLink-item'>
                <Link to='About' className='NavLink'>
                    About
                </Link>
            </li>
            <li className='NavLink-item'>
                <Link to='Portfolio' className='NavLink'>
                    Portfolio
                </Link>
            </li>
            <li className='NavLink-item'>
                <Link to='Contact' className='NavLink'>
                    Contact
                </Link>
            </li>
            <li className='NavLink-item'>
                <Link to='/' className='NavLink DevLogs'>
                    Dev Logs
                </Link>
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