import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import "./Styles/SideBarStyles.css";



const sideBarVariants = {
  sideHide: {
    x: "-100%",
    opacity: 0,
  },
  SideShow: {
    x: 0,
    opacity: 1,

    transition: { duration:.3, type: "spring" },
  },
};

const SideBar = ({ showMenu, showMenuFunction }) => {
  return (
    <motion.div className="Side-Bar"
    // variants={sideBarVariants}
    // initial="sideHide"
    // animate="SideShow"
    >
      <div className="Logo-Container">
        <Link className="R-Link" to={"/"}>
          <h1 className="R">R</h1>
        </Link>
        {/* <img
          src={require("../../Assets/Images/SideBar-Logo-1.jpg")}
          alt=""
          className="Side-Bar-Logo"
        /> */}
      </div>

      <ul className="NavLink-Container">
        <li className="NavLink-item">
          <Link to="About" className="NavLink">
            About
          </Link>
        </li>
        <li className="NavLink-item">
          <Link to="Portfolio" className="NavLink">
            Portfolio
          </Link>
        </li>
        <li className="NavLink-item">
          <Link to="Contact" className="NavLink">
            Contact
          </Link>
        </li>
        <li className="NavLink-item">
          <Link to="/" className="NavLink DevLogs">
            Dev Logs
          </Link>
        </li>
      </ul>

      <div className="Social-Icon-Bar">
        <div className="Social-Icon-Container">
          <a target={"_blank"} href="https://github.com/Dev-Rook">
            <img
              src={require("../../Assets/Icons/GitHub-Icon.png")}
              alt=""
              className="Social-Icon"
            />
          </a>
        </div>
        <div className="Social-Icon-Container">
          <a target={"_blank"} href="https://twitter.com/Dev_Rook">
          <img
            src={require("../../Assets/Icons/Twitter-Icon.png")}
            alt=""
            className="Social-Icon"
          />
            </a>
        </div>
        <div className="Social-Icon-Container">
          <a target={"_blank"} href="https://www.linkedin.com/in/dev-rook/">
            <img
              src={require("../../Assets/Icons/LinkedIn-Icon.png")}
              alt=""
              className="Social-Icon"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SideBar;
