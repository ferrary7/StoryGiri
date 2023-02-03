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

import React from "react";
import "./Subscribe.css";
import EmailInput from "./EmailInput";
import JoinDiscord from "./JoinDiscord";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function Subscribe(props) {
  let url = "";
  if (props.discord) {
    //change this URL with new List's URL later
    // url ="https://gmail.us21.list-manage.com/subscribe/post?u=70e9d1f3c005ec80e670d1031&amp;id=94a9096abf&amp;f_id=00b5e4e1f0";
  } else
    url =
      "https://gmail.us21.list-manage.com/subscribe/post?u=70e9d1f3c005ec80e670d1031&amp;id=94a9096abf&amp;f_id=00b5e4e1f0";

  return (
    <div className="subscribe-container">
      <div className="cta-section">
        <h1>{props.heading}</h1>
        <p>{props.description}</p>

        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              {props.discord ? (
                // <EmailInput
                //   placeholder="Your Email"
                //   btn="Join"
                //   onSubmitted={(formData) => subscribe(formData)}
                // />
                <JoinDiscord
                  placeholder="Your Email"
                  onSubmitted={(formData) => subscribe(formData)}
                />
              ) : (
                <EmailInput
                  placeholder="Your Email"
                  btn="Sign Up"
                  onSubmitted={(formData) => subscribe(formData)}
                />
              )}
              {status === "sending" && (
                <div style={{ color: "blue" }}>Sending 😀...</div>
              )}
              {status === "error" && (
                <div
                  style={{ color: "red" }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === "success" && (
                <div style={{ color: "green" }}>Subscribed 🤩!</div>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
}
