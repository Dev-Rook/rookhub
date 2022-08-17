import React from "react";
import { Link } from "react-router-dom";
import {motion, useDragControls} from 'framer-motion';
import "./Styles/MainButton.css";

const contactButton = {
  hide: {
    x: "-100vw",
    rotate: -360,
    transition: { duration: 1.8 },
  },

  slideIn: {
    x: 0,
    transition: { duration: 0.5, delay: 1.1, type: "spring" },
  },
};

const ContactButton = () => {
  return (
    <Link to="Contact">
      <motion.button
        className="Contact-Button"
        id="Conatact"
        variants={contactButton}
        initial="hide"
        animate="slideIn"
      >
        <p className="Main-Button-Text">Contact Me!</p>
      </motion.button>
    </Link>
  );
};

export default ContactButton;
