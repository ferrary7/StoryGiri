import React from "react";
import GetBlogs from "../data/GetBlogs";
import { useParams } from "react-router-dom";
import './BlogPost.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import likeoutline from '../assets/like-outline.svg';
import likefilled from '../assets/like-filled.svg';

export default function BlogPost() {
  let blogList = GetBlogs();
  const params = useParams();

  function Like(e) {
    console.log(e.target.firstElementChild);
    // if(e.target.firstElementChild.src === likeoutline) {
    //   console.log("hjk")
    //   e.firstElementChild.src = likefilled;
    // } else {
    //   e.firstElementChild.src = likeoutline;
    // }
  }

  return (
    <>
      <Navbar />
      {blogList.map((e) => {
        if (e.title === params.id) {
          //   console.log(e.title);
          return (
            <div key={e.id} className="blogpost">
              <h4 className="category-mark">{e.categories}</h4>
              <h1 className="title">{e.title}</h1>

              <div className="thumbnail" style={{backgroundImage: "url(" + e.thumbURL + ")"}}>
                {/* <img src={e.thumbURL} alt=""  /> */}
              </div>
              
              <div
                className="content-container"
                dangerouslySetInnerHTML={{ __html: e.content }}
              ></div>
              <div className="line"></div>
              <div className="blog-footer">
                <div className="like-button" onClick={(e) => {Like(e)}}>
                  <img src={likeoutline} />
                  {e.likes} Likes
                </div>
              </div>
            </div>
          );
        }
      })}
      <Footer />
    </>
  );
}
