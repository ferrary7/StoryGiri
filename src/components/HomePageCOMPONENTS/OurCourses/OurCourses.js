import React from 'react';
import './OurCourses.css';

const CourseCard = ({ image, name, description, price }) => {
  return (
    <div className="course-card">
      <img className="course-card__image" src={image} alt={name} />
      <div className="course-card__content">
        <h1 className="course-card__name"><b>{name}</b></h1>
        <p className="course-card__description">{description}</p>
        <h2 className="course-card__price"><b>{price}</b></h2>
        <button className="course-card__button">Enroll Now</button>
      </div>
    </div>
  );
};

const OurCourses = () => {
  return (
    <div className="card-container">
      <h1 className="card-container__heading">Our Courses</h1>
      <p className="card-container__paragraph">
        Check out our wide range of courses and start learning today!
      </p>
      <div className="course-cards">
        <CourseCard
          image="https://via.placeholder.com/150"
          name="Course 1"
          description="Learn the basics of course 1"
          price="Free"
        />
        <CourseCard
          image="https://via.placeholder.com/150"
          name="Course 2"
          description="Dive into the world of course 2"
          price="₹99.00/month"
        />
        <CourseCard
          image="https://via.placeholder.com/150"
          name="Course 3"
          description="Master the art of course 3"
          price="₹99.00/month"
        />
      </div>
      <div className="card-container__button">
        <button>Browse More</button>
      </div>
    </div>
  );
};

export default OurCourses;
