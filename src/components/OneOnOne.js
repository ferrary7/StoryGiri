import React from "react";
import Navbar from "./Navbar";
import "./OneOnOne.css";
import ooo_profiles from "../data/ooo_profiles.js";
import Footer from "./Footer";
import BookACall from "./BookACall";

export default function OneOnOne() {
  return (
    <>
      <Navbar />
      <div className="hero-sec one-on-one">
        <div className="hero-container">
          <div className="hero">
            <h1 className="title">One on One</h1>
            <div className="content">
              {/* <h2 className="heading">Our Story</h2> */}
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <div className="handleButton">
                <button className="book-call-btn">Book a Call Now!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="team">
          <h2 className="heading">Why Consider?</h2>
          <div className="info-container">
            {ooo_profiles.map((e) => {
              return (
                <div key={e.id} className="profile-info">
                  <img src={e.img} alt="Profile Pic" className="profile-img" />
                  <div className="profile-body">
                    <h4 className="profile-heading">{e.name}</h4>
                    <p className="profile-description">{e.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="book-call">
          <div className="content">
            <h1 className="heading">Lorem ipsum dolor sit amet</h1>
            <p className="subheading">consectetur adipiscing elit</p>
          </div>
          <BookACall />
        </div>
        <Footer />
      </div>
    </>
  );
}
