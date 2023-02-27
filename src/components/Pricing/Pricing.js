import React from "react";
import Navigation from "../Navbar";
import Footer from "../Footer";
import "./Pricing.css";
import basic1 from "../../assets/basic.svg";
import basic from "../../assets/basic (1).svg";
import basic2 from "../../assets/basic (2).svg";
import OneOnOne from "../HomePageCOMPONENTS/OneOnOneCard/OneOnOne";
import Expertise from "../HomePageCOMPONENTS/Expertise/Expertise";

const PricingTable = () => {
  return (
    <>
      <Navigation />
      <Expertise />
      <div className="mainCont">
        <div className="pricingContainer">
          <h1>We are right here with you.</h1>
          <h1>Let's get started...</h1>
          <div className="pricing-cards-container">
            <div className="pricing-card">
              <img src={basic} alt="" />
              <h1>Understand</h1>
                <h3>*15% Off</h3>
              <div className="featuresPricing">
                <ul>
                  <li>👉Identify Negative Thoughts</li>
                  <li>👉Dig Deeper Into Your Concerns</li>
                  <li>👉Plan Short-Term Goals</li>
                </ul>
              </div>
              <div className="strike">
                <h2>1 Session</h2>
                <h3>
                  <span style={{ fontSize: "1.5rem" }}>for just </span>
                  <s> ₹1500</s> ₹1299
                </h3>
                <button
                  className="pricingButton"
                  onClick={() => {
                      window.open(
                      "https://calendly.com/innerstorysession/one-on-one",
                      "_blank"
                    );
                }}
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="pricing-card">
              <img src={basic1} alt="" />
              <h1>Introspect</h1>
                <h3>*35% Off</h3>
              <div className="featuresPricing">
                <ul>
                  <li>👉Gather Actionable Insights</li>
                  <li>👉Enhance Emotional Intelligence</li>
                  <li>👉Achieve Short Term Goals</li>
                  <li>👉Get 1 month post session support on chat</li>
                </ul>
              </div>
              <div className="strike">
                <h2>5 Sessions</h2>
                <h3>
                  <span style={{ fontSize: "1.5rem" }}>for just </span>
                  <s> ₹7500</s> ₹4999
                </h3>
                <button
                  className="pricingButton"
                  onClick={() => {
                    window.open(
                      "https://calendly.com/innerstorysession/one-on-one",
                      "_blank"
                    );
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="pricing-card">
              <img src={basic2} alt="" />
              <h1>Empowered</h1>
                <h3>*40% Off</h3>
              <div className="featuresPricing">
                <ul>
                  <li>👉Stay on Top of Your Life Goals</li>
                  <li>👉Build Resilience</li>
                  <li>👉Reclaim Yourself</li>
                  <li>👉Make Better Decisions</li>
                  <li>👉Become Your Own Therapist</li>
                  <li>👉Get 1 month post session support on chat</li>
                </ul>
              </div>
              <div className="strike">
                <h2>8 Sessions</h2>
                <h3>
                  <span style={{ fontSize: "1.5rem" }}>for just </span>
                  <s> ₹12000</s> ₹6999
                </h3>
                <button
                  className="pricingButton"
                  onClick={() => {
                    window.open(
                      "https://calendly.com/innerstorysession/one-on-one",
                      "_blank"
                    );
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        <h3 style={{textAlign: 'center'}}>*Book your first free 40 minutes now and then decide your package</h3>
        </div>
      </div>
      <OneOnOne />
      <Footer />
    </>
  );
};

export default PricingTable;
