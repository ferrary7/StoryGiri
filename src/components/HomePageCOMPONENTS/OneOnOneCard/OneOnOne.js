import React from "react";
import "./OneOnOne.css";
import Subscribe from "../../Subscribe";

const OneOnOne = () => {
  return (
    <div className="box">
      <div className="illustrationBox">
        <h2>Ready to make your story a reality?</h2>
        <h3>Book a 1-on-1 coaching session at Storygiri today!</h3>
        <div className="email-input">
          <div className="emailContainer">
            <Subscribe btn="Book 1-1" ooo="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneOnOne;
