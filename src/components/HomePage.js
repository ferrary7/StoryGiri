import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import NewsLetter from "./HomePageCOMPONENTS/NewsLetter/NewsLetter";
import Blog from "./HomePageCOMPONENTS/BlogCards/Blog";
// import AboutUsCard from './HomePageCOMPONENTS/AboutUsCard/AboutUsCard'
// import OurCourses from './HomePageCOMPONENTS/OurCourses/OurCourses'
// import UpcomingEvents from './HomePageCOMPONENTS/UpcomingEvents/UpcomingEvents'
import OneOnOne from './HomePageCOMPONENTS/OneOnOneCard/OneOnOne'
// import Features from './HomePageCOMPONENTS/Features/Features'
import Message from './HomePageCOMPONENTS/Message/Message'
import Table from './HomePageCOMPONENTS/Table/Table'
import StoryGist from "./HomePageCOMPONENTS/StoryGist/StoryGist";
import Testimonials from "./HomePageCOMPONENTS/Testimonials/Testimonials";


const HomePage = () => {
  return (
    <div>
        <Navigation />
        <NewsLetter />
        <StoryGist />
        <OneOnOne />
        <Blog />
        {/* <Features /> */}
        {/* <OurCourses /> */}
        {/* <UpcomingEvents /> */}
        <Table />
        <Testimonials />
        <Message />
        {/* <AboutUsCard /> */}
        <Footer />
    </div>
  );
};

export default HomePage;
