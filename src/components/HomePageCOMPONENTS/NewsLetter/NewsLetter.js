// import React, { useState } from 'react';
// import './NewsLetter.css'

// function NewsLetter() {
//     const [email, setEmail] = useState('');
//     const [subscribed, setSubscribed] = useState(false);
//     const [showWarning, setShowWarning] = useState(false);

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       if (!email) {
//         setShowWarning(true);
//         return;
//       }
//       Backend ig
//       console.log("Email: ", email);
//       setSubscribed(true);
//     }

//   return (
//     <div className="subscribe-form">
//       {subscribed ? (
//         <p>Thank you for subscribing!</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//             <h1>Lorem ipsum dolor sit amet</h1>
//             <h3>consectetur adipiscing elit</h3>
//             <div className='input'>
//                 <label>
//                     <input type="email"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                         placeholder="Your Email..."
//                         className="subscribe-input"
//                     />
//                 </label>
//                 <input type="submit" value="Subscribe" className="subscribe-button" />
//           </div>
//           {showWarning && <p style={{color:'red'}}>Please enter your email address</p>}
//         </form>
//       )}
//     </div>
//   );
// }

// export default NewsLetter;

// import React, { useState } from 'react';

// function SubscribeCard() {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateEmail(email)) {
//       console.log(email);
//     } else {
//       alert('Please enter a valid email');
//     }
//   }

//   const validateEmail = (email) => {
//     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }

//   return (
//     <div style={{display: 'flex'}}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           style={{flex: 1}}
//         />
//         <button type="submit">Subscribe</button>
//       </form>
//       <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" alt="Subscribe" style={{flex: 1}} />
//     </div>
//   );
// }

// export default SubscribeCard;

import React from "react";
import "./NewsLetter.css";
import Subscribe from "../../Subscribe";
import heroImage from "../../../assets/featuredarticle-image.png";

function SubscribeCard() {
  return (
    <div className="subscribe-card">
      <div className="subscribe-card-left">
        <h1>Join the most productive community,</h1>
        <p>where we focus on setting achievable goals and discuss the most practical methods to reach them.<br />
        Our goal is to empower individuals to create their own story, their own way.<br /> 
        By coming together and sharing our experiences, we can learn from each other and achieve success in our personal and professional lives.<br />
        Our community is here to help <span style={{fontSize: '2.5rem'}}>😀.</span><br />
        So, let's work together to craft <strong style={{fontSize: '1.8rem'}}>Your Story Your Way</strong>
        </p>
        <div className="subscribe-card-form">
          <form>
            <Subscribe discord="true" />
          </form>
        </div>
      </div>
      <div className="subscribe-card-right">
        <img src={heroImage} alt="newsletter" />
      </div>
    </div>
  );
}

export default SubscribeCard;
