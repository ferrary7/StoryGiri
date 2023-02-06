import React from "react";
import Footer from "../Footer";
import Message from "../HomePageCOMPONENTS/Message/Message";
import Navbar from "../Navbar";
import Subscribe from "../Subscribe";
import "./Courses.css";
// import CourseCard from "./CourseCard";

function Events() {
  return (
    <div className="eventspage">
      <Navbar />
      <div className="event-container intro-container">
        <h1>Courses</h1>
        <p>
          Exciting things are on the horizon at Storygiri!
          <br />
          Our highly anticipated courses are coming soon, designed to help you
          unlock your full potential and lead a life filled with purpose and
          fulfillment. Stay tuned for more information and be the first to know
          when our courses are available.
          <br />
          <br />
          In the meantime, be sure to join our community and subscribe to our
          newsletter for all the latest updates.
        </p>
      </div>

      {/* <div className="upcoming-container">
        <h2>Upcoming Events</h2>
        <div className="event-cards">
          <EventCard
            name="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            location="Lorem, Ipsum"
            date="December 28, 2022"
            active="true"
          />
          <EventCard
            name="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            location="Lorem, Ipsum"
            date="December 28, 2022"
            active="true"
          />
          <EventCard
            name="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            location="Lorem, Ipsum"
            date="December 28, 2022"
            active="true"
          />
          <EventCard
            name="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            location="Lorem, Ipsum"
            date="December 28, 2022"
            active="true"
          />
        </div>
      </div>

      <div className="previous-container">
        <h2>Previous Events</h2>
        <div className="event-cards">
          <EventCard
            name="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            location="Lorem, Ipsum"
            date="December 28, 2022"
          />
          <EventCard
            name="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            location="Lorem, Ipsum"
            date="December 28, 2022"
          />
          <EventCard
            name="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            location="Lorem, Ipsum"
            date="December 28, 2022"
          />
          <EventCard
            name="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            location="Lorem, Ipsum"
            date="December 28, 2022"
          />
        </div>
      </div> */}

      <div className="eventspage">
      <Subscribe
          description="Stay Up to Date on Your Journey to Success with Our Newsletter Subscription ✅"
        />
      </div>
      <Message />
      <Footer />
    </div>
  );
}

export default Events;
