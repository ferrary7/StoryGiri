import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css'

export default class Testimonials extends Component {
  render() {
    return (<>
        <h1 style={{backgroundColor: 'white'}}>We hear you...</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="" />
          <div className="myCarousel">
            <h3>Aryan Sharma</h3>
            <h4>Developer</h4>
            <p>
              something very serious is written over here, okay. take this seroiusly.
            </p>
          </div>
        </div>

        <div>
          <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="" />
          <div className="myCarousel">
            <h3>Raju Tukadiya</h3>
            <h4>Developer</h4>
            <p>
              storygiri is very good website, i like it becasue i made it.
            </p>
          </div>
        </div>

        <div>
          <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="" />
          <div className="myCarousel">
            <h3>Aditya</h3>
            <h4>Designer & Developer</h4>
            <p>
              I enjoyed making this website with aryan and raju, smexy bhai.
            </p>
          </div>
        </div>

        <div>
          <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="" />
          <div className="myCarousel">
            <h3>Neel</h3>
            <h4>Soul Mentor</h4>
            <p>
              i love this because my students made this website, hahahahah.
            </p>
          </div>
        </div>

        <div>
          <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="" />
          <div className="myCarousel">
            <h3>Shubham</h3>
            <h4>Owner</h4>
            <p>
              this website is mine, and it awesome. promote storygiri, thank you.
            </p>
          </div>
        </div>
      </Carousel>
      </>
    );
  }
}