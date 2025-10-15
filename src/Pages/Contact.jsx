import React, { useRef, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineSms } from "react-icons/md";
import emailjs from "@emailjs/browser";

import "../Styles.css";


const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_jwfug8b","template_nngwlsu", form.current, 'ppm7Y7STtMazsHkyU')
      .then((result) => {
          form.current.reset();
          setMessageSent(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  };
  return (
    <section className="contact-section" id="contact">
        <div className="contact-container">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <TfiEmail className="contact-option-icon" />
                        <h4>Email</h4>
                        <h5>TNaskar01@indianatech.net</h5>
                        <a href="mailto:TNaskar01@indianatech.net" target="_blank" rel="noreferrer">
                        Send a message
                        </a>
                    </article>

                    <article className="contact-option">
                        <MdOutlineSms className="contact-option-icon" />
                        <h4>Phone</h4>
                        <h5>+1 (260) 410-4545</h5>
                        <a href="sms:+12604104545" target="_blank" rel="noreferrer">
                        Text
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    autoComplete="name"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    autoComplete="email"
                />
                <textarea
                    name="message"
                    rows="7"
                    placeholder="Your Message"
                    required
                    autoComplete="off"
                ></textarea>
                <button type="submit" className="hero-btn">
                    {messageSent ? "✔ Message Sent" : "Send Message!"}
                </button>
                {messageSent && (<p className="success-msg">Thanks! I’ll get back to you soon.</p>)}
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact;
