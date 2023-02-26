import React from "react";
import Navbar from "../Navbar";
import "./OneOnOne.css";
import ooo_profiles from "../../data/ooo_profiles.js";
import Footer from "../Footer";
import BookACall from "../BookACall";
import Pricing from './Pricing';


export default function OneOnOne() {

  const posts = [
    {
      id: 1,
      image: 'https://placekitten.com/200/300',
      date: 'February 24, 2023',
      title: 'My first blog post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 2,
      image: 'https://placekitten.com/200/300',
      date: 'February 25, 2023',
      title: 'My second blog post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="price-container">
      {posts.map((post) => (
        <Pricing key={post.id} post={post} />
      ))}
    </div>
      {/* <div className="hero-sec one-on-one">
        <div className="hero-container">
          <div className="hero">
            <h1 className="title">One on One</h1>
            <div className="content">
                <h2 className="heading">Our Story</h2> 
              <p className="description">
                <h2 style={{color: '#324055'}}>Take Control of Your Life with Personalized Coaching</h2>
                <br />
                <br />
                Are you feeling stuck or unsure about where to go next in life? Do you need someone to guide you through the challenges you face and help you set and achieve your goals? Look no further!
                <br />
                <br />
                Our experienced coaches will work with you to identify your goals, clarify your values, and develop a step-by-step plan to help you reach your desired outcome. Whether you want to improve your relationships, increase your confidence, or find your purpose, our life coaches will help you get there.
                <br />
                <br />
                Your private coaching sessions are designed to be a safe and supportive space where you can openly discuss your challenges and aspirations. Our coaches will listen attentively provide you with the tools, resources, and support you need to overcome challenges, stay motivated, and achieve your goals.
              </p>
              <div className="handleButton">
                <BookACall />
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
        </div> */}

        <div className="book-call">
          <div className="content">
            <p className="subheading">Don't let life pass you by. Book your 1-on-1 life coaching call today and take control of your future. Our coaches are here to help you unlock your full potential and live the life you truly desire.</p>
          </div>
          <BookACall />
        </div>
        <Footer />
      {/* </div> */}
    </>
  );
}
