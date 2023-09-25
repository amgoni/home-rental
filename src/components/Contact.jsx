import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form action="">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="button-secondary" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
