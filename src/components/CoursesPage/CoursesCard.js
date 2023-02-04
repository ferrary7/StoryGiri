import React from "react";
import "./Courses.css";

function CourseCard(props) {
  return (
    <div className="eventcard">
      <div className="event-details">
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <div className="info">
          <img></img>
          {props.location}
        </div>
        <div className="info">
          <img></img>
          {props.date}
        </div>

        {props.active === "true" ? (
          <div className="secondary-btn event-btn">Apply Now</div>
        ) : null}
      </div>
      <div className="event-image"></div>
    </div>
  );
}

export default EventCard;
