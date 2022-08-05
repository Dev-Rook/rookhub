import React, {useState} from 'react'
import "./Styles/MobileMenu.css"

const MobileMenu = ({showMenu}) => {

  return (
    <ul className={showMenu ? "Mobile-Navlink-Container Show-Menu" : "Mobile-Navlink-Container"}>
        <li className="Mobile-Navlink-Items">
            <a href="#" className="Mobile-Navlink">
                Home
            </a>
        </li>
        <li className="Mobile-Navlink-Items">
            <a href="#" className="Mobile-Navlink">
                Portfolio
            </a>
        </li>
        <li className="Mobile-Navlink-Items">
            <a href="#" className="Mobile-Navlink">
                About
            </a>
        </li>
        <li className="Mobile-Navlink-Items">
            <a href="#" className="Mobile-Navlink">
                Contact
            </a>
        </li>
        <li className="Mobile-Navlink-Items">
            <a href="#" className="Mobile-Navlink DevLogs">
                Dev Logs
            </a>
        </li>
    </ul>
  )
}

export default MobileMenu