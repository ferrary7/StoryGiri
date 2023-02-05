import React from 'react';
import './StoryGist.css';

function StoryGist() {
  return (
    <div className="gistContainer">
      <h2>What is <h1 className="gradient-text">Storygiri ?</h1></h2>
        <p>
        Storygiri is a platform dedicated to empowering individuals to live their lives to the fullest. We understand that everyone has their own unique story and obstacles they face along the way. 
        <br /><br />
        Our experienced life coaches and trainers are here to help you overcome those challenges and achieve your goals through tailored content, practical training programs, life-changing retreats, and personalized 1-on-1 coaching sessions.
        <br /><br />
        <span style={{lineHeight: '5rem', fontSize: '20px', fontWeight: '700'}}>It's time to take control of "Your Story and live it Your Way" with Storygiri.</span>
        </p>
    </div>
  );
}

export default StoryGist;
