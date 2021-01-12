import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>
        <span> &mdash; </span> Contact <span> &mdash; </span>
      </h1>
      <div className="contact__form">
        <form>
          <input type="text" placeholder="Name" className="form__control" />
          <input type="email" placeholder="Email" className="form__control" />
          <textarea
            type="text"
            placeholder="Message"
            className="form__control"
            rows="5"
          />
          <input type="submit" className="btn__submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
