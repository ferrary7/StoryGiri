import React, { useState } from "react";
import './Message.css';
import insta from '../../../assets/instagram.svg'
import yt from '../../../assets/youtube.svg'
import fb from '../../../assets/facebook.svg'
import mail from '../../../assets/email.svg'

function Message() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="responsive-container">
      <div className="left-column">
        <h2 className="content-header">Would love to hear from you, <br /> Get in touch👋 </h2>
        <div className="social-links">
          <a href="https://www.instagram.com/storygiri/" target="_blank" rel="noreferrer"><img src={insta} alt='' /></a>
          <a href="https://www.youtube.com/results?search_query=storygiri" target="_blank" rel="noreferrer"><img src={yt} alt='' /></a>
          <a href="https://www.facebook.com/Storygiri/" target="_blank" rel="noreferrer"><img src={fb} alt='' /></a>
          <a href="https://gmail.com" target="_blank" rel="noreferrer"><img src={mail} alt='' /></a>
        </div>
      </div>
      <div className="right-column">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Name"
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="Your email"
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <textarea
              placeholder="Your message"
              className="form-input textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <br />
          <button className="form-button" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Message;
