import React from "react";
import "./Subscribe.css";
import EmailInput from "./EmailInput";

export default function Subscribe(props) {
  return (
    <div className="subscribe-container">
      <div className="cta-section">
        <h1>{props.heading}</h1>
        <p>{props.description}</p>

        <EmailInput placeholder="Your Email" btn="Sign Up" />
      </div>
    </div>
  );
}
