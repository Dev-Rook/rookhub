import React from 'react'
import { Link } from 'react-router-dom';
import "./Styles/MobileMenu.css"

const MobileMenu = ({showMenu}) => {

  return (
    <ul className={showMenu ? "Mobile-Navlink-Container Show-Menu" : "Mobile-Navlink-Container"}>
        <li className="Mobile-Navlink-Items">
            <Link to="/" className="Mobile-Navlink">
                <img src={require("../../Assets/Icons/Logo.jpg")} alt="" className="NavIcon" />
            </Link>
        </li>
        <li className="Mobile-Navlink-Items">
            <Link to="Portfolio" className="Mobile-Navlink">
                <img src={require("../../Assets/Icons/Portfolio-Icon.png")} alt="" className="NavIcon" />
            </Link>
        </li>
        <li className="Mobile-Navlink-Items">
            <Link to="About" className="Mobile-Navlink">
                <img src={require("../../Assets/Icons/About-Icon.png")} alt="" className="NavIcon" />
            </Link>
        </li>
        <li className="Mobile-Navlink-Items">
            <Link to="/" className="Mobile-Navlink">
                <img src={require("../../Assets/Icons/Dev-Logs-Icon.png")} alt="" className="NavIcon" />
            </Link>
        </li>
        <li className="Mobile-Navlink-Items">
            <Link to="Contact" className="Mobile-Navlink DevLogs">
                <img src={require("../../Assets/Icons/Contact-Icon.png")} alt="" className="NavIcon" />
            </Link>
        </li>
    </ul>
  )
}

export default MobileMenu