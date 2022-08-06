import React from "react";
import { Link } from "react-router-dom";
import "./Styles/MainButton.css";

const ContactButton = () => {
  return (
    <Link to="Contact">
      <button className="Contact-Button" id="Conatact">
        <p className="Main-Button-Text">Contact Me!</p>
      </button>
    </Link>
  );
};

export default ContactButton;
