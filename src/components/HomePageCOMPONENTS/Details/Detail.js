import React from "react";
import "./Detail.css";
import homeDetails from "../../../data/homeDetails";

const Detail = () => {
  return (
    <div className="team">
      <h2 className="heading" style={{fontSize: "3.5rem", fontFamily: "Yeseva One", fontWeight: "550"}}> 
      Unleash Your Best Life with Storygiri's Personalized Programs 🤗
      </h2>
      <div className="heroInfo-container">
        {homeDetails.map((e) => {
          return (
            <div key={e.id} className="heroProfile-info">
              <img src={e.img} alt="Profile Pic" className="heroProfile-img" />
              <div className="heroProfile-body">
                <h4 className="heroProfile-heading">{e.name}</h4>
                <p className="heroProfile-description">{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
