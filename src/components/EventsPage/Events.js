import React from "react";
import Footer from "../Footer";
import Message from "../HomePageCOMPONENTS/Message/Message";
import Navbar from "../Navbar";
import Subscribe from "../Subscribe";
import "./Events.css";
// import EventCard from "./EventCard";

function Events() {
  return (
    <div className="eventspage">
      <Navbar />
      <div className="event-container intro-container">
        <h1>Events</h1>
        <p>
        Get Ready for a Transformative Experience - Keep an Eye Out for Our Upcoming Event Announcements.
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
          heading="Subscribe to our Newsletter"
          description="Get more updates about the upcoming events and retreats."
        />
      </div>
      <Message />
      <Footer />
    </div>
  );
}

export default Events;
