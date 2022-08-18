import React, {useState} from "react";
import { motion } from "framer-motion";

import "../../Components/Page Components/_Global-Page-Styles/GlobalPageStyles.css";

import ContactButton from "../../Components/Page Components/Main-Button/ContactButton";


const intoTextVariants = {
  noText: {
    y: "100%",
    opacity: 0,
  },
  showText: {
    y: 0,
    opacity: 1,

    transition: { duration: 1, delay: 0.5, type: "spring" },
  },
};

const Intro = () => {
  return (
    <div className="Page-Section Intro-Section">
      <div className="Header-Container">
        <motion.h1
          className="Header-Text"
          variants={intoTextVariants}
          initial="noText"
          animate="showText"
        >
          Hi, I'm <br /> Daniel <span className="Red-Letter">R</span>ook
        </motion.h1>
        <p className="Job-Title">
          <span className="Red-Letter">-</span> &nbsp; Frontend Web Developer
        </p>
        <div className="Social-Icon-Container">
          <motion.a target="_blank" href="https://github.com/Dev-Rook">
            <img src={require("../../Assets/Icons/GitHub-Icon.png")} alt="" className="SocialIcon" />
          </motion.a>
          <motion.a target="_blank" href="https://github.com/Dev-Rook">
            <img src={require("../../Assets/Icons/Twitter-Icon.png")} alt="" className="SocialIcon" />
          </motion.a>
          <motion.a target="_blank" href="https://github.com/Dev-Rook">
            <img src={require("../../Assets/Icons/LinkedIn-Icon.png")} alt="" className="SocialIcon" />
          </motion.a>
        </div>
        <ContactButton />
      </div>
    </div>
  );
};






// const [location, setLocation] = useState("");
// const [loactionData, setLocationData] = useState({});

// const url =(`HTTPS://THis is a ${location} link`)

// const getLocationData = (e) => {
//   if (e.key === "Enter") {
//     axios.get(url).then((result) => {
//       setLocationData(result.data)
//       console.log(result.data)
//     })

//     setLocation("")
//   }
// }



export default Intro;
