import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <span className="line"></span>
      <div className="container">
        <form className="col-1">
          <label>Name:</label>
          <input type="name" name="name" id="name" placeholder="Enter your name..." />
          <label>Email:</label>
          <input type="email" name="email" id="email" placeholder="Enter your email..." />
          <label>Message:</label>
          <textarea type="text" name="message" id="message" placeholder="Enter your message..."></textarea>
          <button className="button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
