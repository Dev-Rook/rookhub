import React, { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

import "../../Components/Page Components/_Global-Page-Styles/GlobalPageStyles.css";
import "./Styles/Contact.css";

import ContactSectionButton from "../../Components/Page Components/Main-Button/ContactSectionButton";

export const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
    e.target.reset();
  };

  return (
    <div className="Page-Section Contact-Section" name="Contact">
      <div className="Form-Section">
        <div className="Header-Container Contact-Header">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="Header-Text"
          >
            Contact <span className="Red-Letter">M</span>e
          </h1>

          <div className="Section-Description">
            I am interested in opportunities to freelance or perhaps even join
            in on large ambitious projects. If you have any questions, feel free
            to ask.
          </div>
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
        {/* <img
          src={require("../../Assets/Icons/Location-Icon.png")}
          alt=""
          className="Location-Pin"
        /> */}
        <img
          src={require("../../Assets/Images/Cornwall-County.png")}
          alt=""
          className="Map"
        />
      </div>
    </div>
  );
};
