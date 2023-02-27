import React from "react";
import { useNavigate } from "react-router-dom";
import "./OneOnOne.css";
import Subscribe from "../../Subscribe";

const OneOnOne = () => {
  const navigate = useNavigate();
  return (
    <div className="box">
      <div className="illustrationBox">
        <div>
          <h2>We hear you, we'll make it better.</h2>
          <h3>Book a 1-on-1 transformational session with us now!</h3>
        </div>
        {/* <h2>Ready to make your story a reality?</h2>
          <h3>Book a 1-on-1 coaching session at Storygiri today!</h3> */}
        <div className="email-input">
          <div className="emailContainer">
            <Subscribe btn="Book 1-1" ooo="true" />
            <p onClick={()=> {window.scrollTo(0, 0); navigate("/ooo")}} className="paraEmail" style={{ textDecoration: 'underline', cursor: 'pointer' }}>View Pricing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneOnOne;
