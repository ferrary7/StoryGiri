import React, { useState } from 'react';
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
      <h2>Want to talk about your story 1-1?</h2>
      <h3>Book 1-1 Meeting With Us</h3>
      <form onSubmit={handleSubmit}>
        <input
        className='topic'
          placeholder="Your topic"
          value={topic}
          onChange={handleChange}
        />
        <button className='bookNow' type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default OneOnOne;
