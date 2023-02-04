import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OneOnOne.css'

const OneOnOne = () => {
  const [topic, setTopic] = useState('');

  const handleChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to handle form submission here
    console.log(`Submitting topic: ${topic}`);
  };

  return (
    <div className="box">
      <div className='illustrationBox'>
        <h2>Ready to make your story a reality?</h2>
        <h3>Book a 1-on-1 coaching session at Storygiri today!</h3>
        <div className="email-input">
          <div className="emailContainer" onSubmit={handleSubmit}>
          <input type="email" placeholder='Your Topic' onChange={handleChange} />
          <Link to='/ooo'>
            <div className="ooob">Book 1-1</div>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OneOnOne;
