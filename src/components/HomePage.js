import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import NewsLetter from "./HomePageCOMPONENTS/NewsLetter/NewsLetter";
import Blog from "./HomePageCOMPONENTS/BlogCards/Blog";
// import AboutUsCard from './HomePageCOMPONENTS/AboutUsCard/AboutUsCard'
// import OurCourses from './HomePageCOMPONENTS/OurCourses/OurCourses'
import UpcomingEvents from "./HomePageCOMPONENTS/UpcomingEvents/UpcomingEvents";
import OneOnOne from "./HomePageCOMPONENTS/OneOnOneCard/OneOnOne";
import Features from "./HomePageCOMPONENTS/Features/Features";
import Message from "./HomePageCOMPONENTS/Message/Message";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <NewsLetter />
      <Features />
      <OneOnOne />
      {/* <OurCourses /> */}
      <UpcomingEvents />
      <Blog />
      <Message />
      {/* <AboutUsCard /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
