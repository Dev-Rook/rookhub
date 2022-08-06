import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

import "../_Global-Page-Styles/GlobalPageStyles.css";
import "./Styles/Contact.css";

import ContactSectionButton from "../Main-Button/ContactSectionButton";

// const schema = yup.object().shape({
//   Name: yup.string().required(),
//   Email: yup.string().email().required(),
//   Subject: yup.string().required(),
//   Message: yup.string().required(),
// })

export const Contact = () => {
  // const {register, handleSubmit, error} = useForm({
  //   resolver: yupResolver(schema),
  // })

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // const handleName = (e) => {
  //   setName({...name, Name: e.target.value})
  // }

  // const handleEmail = (e) => {
  //   setEmail({...email, Email: e.target.value})
  // }

  // const handleSubject = (e) => {
  //   setSubject({...subject, Subject: e.target.value})
  // }

  // const handleMessage = (e) => {
  //   setMessage({...message, Message: e.target.value})
  // }

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
        </form>

        <button type='submit' value={"Send"} className="Contact-Section-Button">
          <p className="Main-Button-Text">Contact Me!</p>
        </button>
      </div>

      <div className="Map--Board">
        <img
          src={require("../../../Assets/Images/Map.jpg")}
          alt=""
          className="Map"
        />
      </div>
    </div>
  );
};
