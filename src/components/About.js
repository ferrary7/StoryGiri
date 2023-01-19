import React from "react";
import Navbar from "./Navbar";
import Subscribe from "./Subscribe";
import team_members from "../data/team-members";
import "./About.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="hero-sec">
        <div className="hero-container">
          <div className="hero">
            <h1 className="title">About Us</h1>
            <div className="content">
              <h2 className="heading">Our Story</h2>
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
            </div>
          </div>
        </div>
        <div className="team">
          <h2 className="heading">Our Team</h2>
          <div className="cards-container">
            {team_members.map((e) => {
              return (
                <div key={e.id} className="team-card">
                  <img src={e.img} alt="Member Name" />
                  <div className="card-body">
                    <h4 className="card-heading">{e.name}</h4>
                    <p className="card-description">{e.post}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="our-mission">
          <div className="content">
            <h2 className="heading">Our Mission</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Exceptgiteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
        <Subscribe
          heading="Lorem ipsum dolor sit amet"
          description="consectetur adipiscing elit"
        />
      </div>
    </>
  );
}
