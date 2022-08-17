import React from 'react'
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
    transition: { duration: 0.5,  type: "spring" },
  },
};


const ContactSectionButton = () => {
  return (
    <motion.button type='submit' value="Send" className='Contact-Section-Button'
      variants={contactButton}
      initial="hide"
      animate="slideIn"
    >
        <p className="Main-Button-Text">
            Contact Me!
        </p>
    </motion.button>
  )
}

export default ContactSectionButton