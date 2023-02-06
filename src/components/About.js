import React from "react";
import Navbar from "./Navbar";
import Subscribe from "./Subscribe";
import team_members from "../data/team-members";
import "./About.css";
import Footer from "./Footer";
import BookACall from "./BookACall";

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
                We believe that every person has their own story which they have been living and also a story which they want to live. 
                <br />
                <br />
                Everyone wants to stay focused, achieve their goals, be happy, have fulfilling relationships and enjoy their lives but we face different issues and hardships all along. Through Storygiri, we help you resolve those issues with our experienced life coaches and trainers through our unique content, practical training programs, life changing retreats and 1-1 coaching sessions.
                <br />
                <br />
                Our 1-1 coaching sessions are especially designed to make customized journey for you and help you achieve your goals by yourself. The sessions are taken by certified and experienced coaches who are regularly working on innovative and effective ways to make the journey impactful and successful. 
                <br />
                <br />
                It's time to live <strong style={{fontSize: '1.8rem'}}>Your Story Your Way</strong>
              </p>
              <BookACall />
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
            At Storygiri, we believe that personal growth and mental wellbeing are crucial components of a fulfilling life. Our mission is to empower individuals to achieve their goals and reach their full potential by providing tools, resources and support for their personal and emotional development
              <br />
              <br />
              Through our programs and services, we strive to create a community that fosters positivity, growth, and self-awareness, enabling people to lead happier, healthier and more productive lives.
            </p>
          </div>
        </div>
        <div className="errorFix">
          <Subscribe
            heading="Join our ever-evolving community"
            description="Stay ahead of the curve and be the first to know about our latest videos, events, blogs, and offerings."
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
