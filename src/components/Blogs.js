import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Blogs.css";
// import { Link } from "react-router-dom";
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/rightarrow.svg";
import featureimage from "../assets/featuredarticle-image.png";
import articleimage from "../assets/article-image.png";
import BlogCategoryCard from "./BlogCategoryCard";
import Subscribe from "./Subscribe";
import BlogCard from "./BlogCard";
import Footer from "./Footer";
import GetBlogs from "../data/GetBlogs";

function Blogs() {
  // setBlogList();
  let blogList = GetBlogs();
  console.log(blogList);
  // console.log(blogList);
  return (
    <div className="blogpage">
      <Navbar />
      <div className="container blog-container intro-container">
        {/* <BlogDataCollector /> */}
        <Subscribe
          heading="Welcome to Storygiri's Blog"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>

      <div className="category-container">
        <h2>Explore Various Categories</h2>
        <div className="carousel-container">
          <div className="left-arrow">
            <img className="arrow" src={leftarrow} alt="left"></img>
          </div>
          <div className="carousel">
            <BlogCategoryCard
              title="Category 1"
              desc="consectetur adipiscing elit"
            />
            <BlogCategoryCard
              title="Category 2"
              desc="consectetur adipiscing elit"
            />
            <BlogCategoryCard
              title="Category 3"
              desc="consectetur adipiscing elit"
            />
          </div>
          <div className="right-arrow">
            <img className="arrow" src={rightarrow} alt="right"></img>
          </div>
        </div>
      </div>

      <div className="feature-section">
        <h2>Featured Article</h2>
        <div className="feature-container">
          <div
            className="feature-image"
            style={{ backgroundImage: "url(" + featureimage + ")" }}
          ></div>
          <div className="feature-content">
            <div className="category-mark">Category 1</div>
            <h4>5 Tips on How to “Wake Up” in Winter’s Morning</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="secondary-btn readmore-btn">Read More</div>
          </div>
        </div>
      </div>

      <div className="recent-articles-section">
        <h2>Recent Articles</h2>
        <div className="articles-container">
          {blogList.map((e) => {
            return (
              <BlogCard
                image={articleimage}
                category={e.category}
                title={e.title}
                desc={e.content}
              />
            );
          })}
          {/* <BlogCard
            image={articleimage}
            category="Category 1"
            title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
            desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <BlogCard
            image={articleimage}
            category="Category 1"
            title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
            desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <BlogCard
            image={articleimage}
            category="Category 1"
            title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
            desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
          />
          <BlogCard
            image={articleimage}
            category="Category 1"
            title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
            desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
          /> */}
        </div>

        <Subscribe
          heading="Lorem ipsum dolor sit amet"
          description="consectetur adipiscing elit"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
