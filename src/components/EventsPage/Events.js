import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Subscribe from '../Subscribe'
import './Events.css'
import EventCard from './EventCard'

function Events() {
  return (
    <div className='eventspage'>
      <Navbar />
      <div className="container event-container intro-container">
        <h1>Events</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className='upcoming-container'>
        <h2>Upcoming Events</h2>
        <div className='event-cards'>
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

      <div className='previous-container'>
        <h2>Previous Events</h2>
        <div className='event-cards'>
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
      </div>

      <div className='eventspage'>
        <Subscribe
          heading="Lorem ipsum dolor sit amet"
          description="consectetur adipiscing elit"
        />
      </div>
      
      <Footer />
    </div>
  )
}

export default Events
