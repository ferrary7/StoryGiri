// import React from "react";
// import { Link } from "react-router-dom";
// import "./EmailInput.css";

// function EmailInput(props) {
//   return (
//     <div className="email-input">
//       <div className="email-container">
//         <input type="email" placeholder={props.placeholder} />
//         <div className="btn secondary-btn">{props.btn}</div>
//       </div>

//       <p className="note">
//         By clicking Sign Up you're confirming that you agree with our{" "}
//         <Link to="/t&c">
//           <u>Terms and Conditions</u>
//         </Link>
//         .
//       </p>
//     </div>
//   );
// }

// export default EmailInput;

import React from "react";
import "./EmailInput.css";
import { useState } from "react";

function JoinDiscord({ onSubmitted, placeholder, btn, message }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const isFormValidated = onSubmitted({ EMAIL: email });
    if (mailRegex.test(email))
      window.open("https://discord.gg/259MF99w", "_blank");
    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  return (
    <div className="email-input">
      <div className="email-container" style={{ display: "block" }}>
        <input
          type="email"
          placeholder={placeholder}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className="btn secondary-btn"
          onClick={handleFormSubmit}
          rel="noreferrer noopener"
          style={{ width: "25rem", margin: "2.5rem 0 0 0" }}
        >
          {/* {btn} */}
          Join Our Community
        </button>
      </div>

      {/* <p className="note">
        By clicking Sign Up you're confirming that you agree with our{" "}
        <u
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/t&c");
          }}
        >
          Terms and Conditions
        </u>
        .
      </p> */}
    </div>
  );
}

export default JoinDiscord;
