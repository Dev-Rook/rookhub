import React, { useState } from "react";
import "../_Global-Page-Styles/GlobalPageStyles.css";
import "./Styles/Contact.css";

import ContactSectionButton from "../Main-Button/ContactSectionButton";

export const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="Page-Section Contact-Section">
      <div className="Form-Section">
        <div className="Header-Container Contact-Header">
          <h1 className="Header-Text">
            Contact <span className="Red-Letter">M</span>e
          </h1>

          <p className="Section-Description">
            <span className="Red-Letter">-</span> I am interested in
            opportunities to freelance or perhaps even <br /> join in on large
            ambitious projects. If you have any questions, <br /> feel free to
            ask.
          </p>
        </div>

        <form action="POST" className="Contact-Form">
          <fieldset className="Name--Email">
            <input type="text" className="Input" name="Name" placeholder="Name" />
            <input type="text" className="Input" name="Name" placeholder="Email" />
          </fieldset>

          <fieldset className="Subject--Message">
          <input type="text" className="Input Subject" name="Name" placeholder="Subject" />
            <textarea name="Message" className="Input Message-Box" placeholder="Messgae" cols="30" rows="10"></textarea>
          </fieldset>
        </form>

        <div className="Button-Wrapper">
          <ContactSectionButton />
        </div>
      </div>

      <div className="Map--Board">
        <img src={require("../../../Assets/Images/Map.jpg")} alt="" className="Map" />
      </div>
    </div>
  );
};
