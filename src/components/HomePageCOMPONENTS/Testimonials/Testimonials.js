import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css'
import man from'../../../assets/man.png'
import woman from'../../../assets/woman.png'

export default class Testimonials extends Component {
  render() {
    return (<>
        <h1 style={{backgroundColor: 'white', paddingTop: '5rem'}}>We hear you...</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={man} alt="" />
          <div className="myCarousel">
            <h3>Priithu</h3>
            <h4>Client</h4>
            <p>
            Shubham is young, sincere and honest. In my first session with him itself, I felt optimistic about the outcomes.
            The sessions were simple, focussed on finer details, insightful and instilled me with hope and direction.
            There are subtle fundamental changes I see in myself, which I owe to Shubham and his self belief in his craft. All the best for a bright future.
            </p>
          </div>
        </div>

        <div>
          <img src={woman} alt="" />
          <div className="myCarousel">
            <h3>Bhumika</h3>
            <h4>Client</h4>
            <p>
            Shubham is a great coach. Very patient and empathetic. He helped me resolve most of my problems with his super powerful questioning. His patience and listening skills are commendable.
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