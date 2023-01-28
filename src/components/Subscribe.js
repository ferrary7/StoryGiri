// import React from "react";
// import "./Subscribe.css";
// import EmailInput from "./EmailInput";

// export default function Subscribe(props) {
//   return (
//     <div className="subscribe-container">
//       <div className="cta-section">
//         <h1>{props.heading}</h1>
//         <p>{props.description}</p>

//         <EmailInput placeholder="Your Email" btn="Sign Up" />
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import "./Subscribe.css";
import EmailInput from "./EmailInput";

export default function Subscribe(props) {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidEmail(emailRegex.test(e.target.value));
  };

  const handleSubscribe = () => {
    if (validEmail) {
      console.log(`Email: ${email}`);
      setSubscribed(true);
    } else {
      console.log("Invalid email");
    }
  };

  return (
    <div className="subscribe-container">
      <div className="cta-section">
        <h1>{props.heading}</h1>
        <p>{props.description}</p>

        <EmailInput
          placeholder="Your Email"
          btn="Sign Up"
          email={email}
          validEmail={validEmail}
          handleEmailChange={handleEmailChange}
          handleSubscribe={handleSubscribe}
        />
        {subscribed && <p>Thanks for checking in!</p>}
      </div>
    </div>
  );
}

