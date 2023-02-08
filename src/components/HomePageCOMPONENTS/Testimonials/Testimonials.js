import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css'
import man from'../../../assets/man.png'
import woman from'../../../assets/woman.png'
import woman2 from'../../../assets/woman2.png'
import man2 from'../../../assets/man2.png'
import man3 from'../../../assets/man3.png'
import woman3 from'../../../assets/woman3.png'

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
            Shubham is a great coach. Very patient and empathetic.
            He helped me resolve most of my problems with his super powerful questioning.
            His patience and listening skills are commendable.
            </p>
          </div>
        </div>

        <div>
          <img src={woman2} alt="" />
          <div className="myCarousel">
            <h3>Syeda</h3>
            <h4>Client</h4>
            <p>
              The coaching session has changed so much for me. That one perspective has shifted many things in life. You are an awesome coach.
            </p>
          </div>
        </div>

        <div>
          <img src={woman3} alt="" />
          <div className="myCarousel">
            <h3>Shreya</h3>
            <h4>Client</h4>
            <p>
            Heyyy, I just wanted to thank you for helping me get better...I feel soo much better now..my marks have also improved but not how much I expected but better than last time.. I started working out also...I feel good about myself...me and Manoj communicate well now so we don't misunderstand things...so everything is got better and I'm really happy about it...all thanks to you..you seriously helped alottt..thank you so much..you are the best!!
            </p>
          </div>
        </div>

        {/* <div>
          <img src={man3} alt="" />
          <div className="myCarousel">
            <h3>Shubham</h3>
            <h4>Owner</h4>
            <p>
              this website is mine, and it awesome. promote storygiri, thank you.
            </p>
          </div>
        </div> */}
      </Carousel>
      </>
    );
  }
}