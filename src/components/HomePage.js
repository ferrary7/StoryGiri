import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import NewsLetter from "./HomePageCOMPONENTS/NewsLetter/NewsLetter";
import Blog from "./HomePageCOMPONENTS/BlogCards/Blog";
// import AboutUsCard from './HomePageCOMPONENTS/AboutUsCard/AboutUsCard'
// import OurCourses from './HomePageCOMPONENTS/OurCourses/OurCourses'
// import UpcomingEvents from './HomePageCOMPONENTS/UpcomingEvents/UpcomingEvents'
import OneOnOne from "./HomePageCOMPONENTS/OneOnOneCard/OneOnOne";
// import Features from './HomePageCOMPONENTS/Features/Features'
import Message from "./HomePageCOMPONENTS/Message/Message";
import Table from "./HomePageCOMPONENTS/Table/Table";
// import StoryGist from "./HomePageCOMPONENTS/StoryGist/StoryGist";
import Testimonials from "./HomePageCOMPONENTS/Testimonials/Testimonials";
import Detail from "./HomePageCOMPONENTS/Details/Detail";
import Results from "./HomePageCOMPONENTS/Results/Results";
import image1 from '../assets/ba1.svg'
import image2 from '../assets/ba2.svg'
import image3 from '../assets/ba3.svg'
import image4 from '../assets/ba4.svg'
import image5 from '../assets/ba5.svg'
import image6 from '../assets/ba6.svg'
import Expertise from "./HomePageCOMPONENTS/Expertise/Expertise";


const HomePage = () => {
  return (
    <div>
      <Navigation />
      {/* <Results /> */}
      <NewsLetter />
      <Expertise />
      {/* <StoryGist /> */}
      <OneOnOne />
      <Detail />
      <Results images={[image1, image2, image3, image4, image5, image6]} />
      <Testimonials />
      <Table />
      <Blog />
      {/* <Features /> */}
      {/* <OurCourses /> */}
      {/* <UpcomingEvents /> */}
      <Message />
      {/* <AboutUsCard /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
