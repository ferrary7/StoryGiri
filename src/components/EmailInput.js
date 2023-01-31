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
import { Link } from "react-router-dom";
import "./EmailInput.css";
import { useState } from "react";

function EmailInput({ status, message, onSubmitted, placeholder, btn }) {
  const [email, setEmail] = useState("");
  // const [isValid, setIsValid] = useState(false);
  // const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    // setIsValid(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email));
  };

  // const handleSubscribe = () => {
  //     setSubscribed(true);
  //   if (isValid) {
  //     console.log("valid email:", email);
  //   } else {
  //     console.log("invalid email:", email);
  //   }
  // };

  // if (subscribed) {
  //   return (
  //     <div style={{ fontSize: "20px", fontWeight: "600", width: "100vh" }}>
  //       Thanks for checking in!
  //     </div>
  //   );
  // }

  // const getMessage = (message) => {
  //   if (!message) {
  //     return null;
  //   }
  //   const result = message?.split("-") ?? null;
  //   if ("0" !== result?.[0]?.trim()) {
  //     // return sanitize(message);
  //   }
  //   // const formattedMessage = result?.[1]?.trim() ?? null;
  //   // return formattedMessage ? sanitize(formattedMessage) : null;
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isFormValidated = onSubmitted({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  return (
    <div className="email-input">
      <div className="email-container">
        <input
          type="email"
          placeholder={placeholder}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className="btn secondary-btn"
          onClick={handleFormSubmit}
        >
          {btn}
        </button>
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
