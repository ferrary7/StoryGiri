/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './UpcomingEvents.css';
import { Link } from 'react-router-dom';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UpcomingEvents = () => {
  return (
    <div className='eventsContainer'>
      <h1>Upcoming Events</h1>
      <h5>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua.
      </h5>
      <div>
        <div className='location-map-container'>
          <div className='location-container'>
            <h2>Rishikesh Holi Fest</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            <p><FontAwesomeIcon icon={faLocationDot} />  The Rudraksh Resort, Rishikesh</p>
            <Link to='./ooo' className='bmButton'>
            Sign up for event
            </Link>
          </div>
          <iframe
            className='map-container'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55235.63782569806!2d78.2355891849418!3d30.087674107689264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e67cf93f111%3A0xcc78804a6f941bfe!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1674048504378!5m2!1sen!2sin"
            width="600"
            height="350"
            style={{ border: 0, borderRadius: "0.5rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
