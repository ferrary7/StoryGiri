  import React from "react";
  import Navbar from "./Navbar";
  import "./Blogs.css";
  import './Videos.css'
  import featureimage from "../assets/featuredarticle-image.png";
  import videoImage from "../assets/article-image.png";
  import Footer from "./Footer";
  import BlogCard from "./BlogCard";

  
  function Videos() {
    return (
      <div className="blogpage">
        <Navbar />
        <div className="videoMain">
          <h1>Storygiri's Youtube</h1>
          <p>Lorem ipsum dolor sit amet.
              Et maiores reprehenderit et accusantium temporibus ex ducimus
              voluptatem non atque voluptatibus? Cum porro ipsa id magni
              omnis et ullam quidem ea repellendus velit ea ipsa ducimus! 
          </p>
          <div className="secondary-btn videoBrowse-btn" 
              onClick={() => window.open('https://www.youtube.com/@storygiri504', '_blank')}>
              Go to Youtube
          </div>
        </div>

      
        <div className="feature-section">
          <h2>Featured Video</h2>
          <div className="feature-container">
            <div
              className="feature-image"
              style={{ backgroundImage: "url(" + featureimage + ")" }}
            ></div>
            <div className="feature-content">
              <div className="category-mark">Category 1</div>
              <h4>Ajeeb hai ye Zindigi - Shubham Bhatt | Hindi Kahaani</h4>
              <p>
                A sweet story representing the different colors of our lifecd , consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="secondary-btn videoBrowse-btn" 
              onClick={() => window.open('https://www.youtube.com/watch?v=yiQH6Oj1dVM', '_blank')}>
              Watch on Youtube
          </div>
            </div>
          </div>
        </div>

        <div className="recent-articles-section">
          <h2>Browse our Other Videos</h2>
          <div className="articles-container">
            <BlogCard
              image={videoImage}
              category="Category 1"
              title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
              desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
            />
            <BlogCard
              image={videoImage}
              category="Category 1"
              title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
              desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
            />
            <BlogCard
              image={videoImage}
              category="Category 1"
              title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
              desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
            />
            <BlogCard
              image={videoImage}
              category="Category 1"
              title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
              desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
            />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "column" , padding:"10rem"}}>
            <h3 style={{padding: "2rem"}}>Liking Our Content?</h3>
            <div className="secondary-btn videoBrowse-btn"
                onClick={() => window.open('https://www.youtube.com/@storygiri504', '_blank')}>
                We have MORE
            </div>
          </div>
        </div>
          <Footer />
      </div>
    );
  }

  export default Videos;
