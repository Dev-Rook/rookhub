import React, {useState} from 'react'
import "./Styles/MobileMenu.css"

const MobileMenu = ({showMenu}) => {

  return (
    <ul className={showMenu ? "Mobile-Navlink-Container Show-Menu" : "Mobile-Navlink-Container"}>
        <li className="Mobile-Navlink-Items">
            <a href="#" className="Mobile-Navlink">
                <img src={require("../../Assets/Icons/Home-Icon.png")} alt="" className="NavIcon" />
            </a>
        </li>
        <li className="Mobile-Navlink-Items">
            <a href="#" className="Mobile-Navlink">
                <img src={require("../../Assets/Icons/Portfolio-Icon.png")} alt="" className="NavIcon" />
            </a>
        </li>
        <li className="Mobile-Navlink-Items">
            <a href="#" className="Mobile-Navlink">
                <img src={require("../../Assets/Icons/About-Icon.png")} alt="" className="NavIcon" />
            </a>
        </li>
        <li className="Mobile-Navlink-Items">
            <a href="#" className="Mobile-Navlink">
                <img src={require("../../Assets/Icons/Dev-Logs-Icon.png")} alt="" className="NavIcon" />
            </a>
        </li>
        <li className="Mobile-Navlink-Items">
            <a href="#" className="Mobile-Navlink DevLogs">
                <img src={require("../../Assets/Icons/Contact-Icon.png")} alt="" className="NavIcon" />
            </a>
        </li>
    </ul>
  )
}

export default MobileMenu