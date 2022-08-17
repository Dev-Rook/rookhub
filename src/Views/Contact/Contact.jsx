import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";


import "../../Components/Page Components/_Global-Page-Styles/GlobalPageStyles.css";
import "./Styles/Contact.css";

import ContactSectionButton from "../../Components/Page Components/Main-Button/ContactSectionButton";



export const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_je8a17f",
        "template_eltdcq8",
        form.current,
        "sQqr418TGzaMZjJK7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <div className="Page-Section Contact-Section" name="Contact">
      <div className="Form-Section">
        <div className="Header-Container Contact-Header">
          <h1 className="Header-Text">
            Contact <span className="Red-Letter">M</span>e
          </h1>

          <p className="Section-Description">
            <span className="Red-Letter">-</span> &nbsp; I am interested in
            opportunities to freelance or perhaps even <br /> join in on large
            ambitious projects. If you have any questions, <br /> feel free to
            ask.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="Contact-Form">
          <fieldset className="Name--Email">
            <input
              required
              type="text"
              className="Input"
              name="Name"
              placeholder="Email"
            />
            <input
              required
              type="text"
              className="Input"
              name="Email"
              placeholder="Name"
            />
          </fieldset>

          <fieldset className="Subject--Message">
            <input
              required
              type="text"
              className="Input Subject"
              name="Subject"
              placeholder="Subject"
            />
            <textarea
              required
              name="Message"
              className="Input Message-Box"
              placeholder="Messgae"
              cols="30"
              rows="10"
            ></textarea>
          </fieldset>

          <ContactSectionButton />

        {/* <button type='submit' value={"Send"} className="Contact-Section-Button">
          <p className="Main-Button-Text">Contact Me!</p>
        </button> */}
        </form>
      </div>

      <div className="Map--Board">
        <img
          src={require("../../Assets/Images/Map.jpg")}
          alt=""
          className="Map"
        />
      </div>
    </div>
  );
};
