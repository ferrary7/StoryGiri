import React from "react";
import { Link } from "react-router-dom";
import "./EmailInput.css";

function EmailInput(props) {
  return (
    <div className="email-input">
      <div className="email-container">
        <input type="email" placeholder={props.placeholder} />
        <div className="btn secondary-btn">{props.btn}</div>
      </div>

      <p className="note">
        By clicking Sign Up you're confirming that you agree with our{" "}
        <Link to="/t&c">
          <u>Terms and Conditions</u>
        </Link>
        .
      </p>
    </div>
  );
}

export default EmailInput;
