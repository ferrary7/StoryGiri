import React, { useState } from 'react';
import './NewsLetter.css'

function NewsLetter() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!email) {
        setShowWarning(true);
        return;
      }
      // Backend ig 
      console.log("Email: ", email);
      setSubscribed(true);
    }

  return (
    <div className="subscribe-form">
      {subscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h3>consectetur adipiscing elit</h3>
            <div className='input'>
                <label>
                    <input type="email"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your Email..."
                        className="subscribe-input"
                    />
                </label>
                <input type="submit" value="Subscribe" className="subscribe-button" />
          </div>
          {showWarning && <p style={{color:'red'}}>Please enter your email address</p>}
        </form>
      )}
    </div>
  );
}

export default NewsLetter;
