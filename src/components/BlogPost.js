import React, { useState } from "react";
import GetBlogs from "../data/GetBlogs";
import { useParams } from "react-router-dom";
import './BlogPost.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import likeoutline from '../assets/like-outline.svg';
import likefilled from '../assets/like-filled.svg';
import { doc, getFirestore, updateDoc } from "firebase/firestore";

export default function BlogPost() {
  let blogList = GetBlogs();
  const params = useParams();
  // const [likesNum, setLikesNum] = useState(0);
  const db = getFirestore();

  function Like(e, postId, numOfLikes) {
    const docRef = doc(db, "blogposts", postId);
    // setLikesNum(numOfLikes);

    if(localStorage.getItem("liked"+postId) !== "true") {
      updateDoc(docRef, {
        likes: numOfLikes + 1
      });
      
      e.target.firstElementChild.src = likefilled;
      console.log("clicked like", numOfLikes+1)
      localStorage.setItem("liked"+postId, "true");

      // setLikesNum((prev) => prev + 1);
      // e.target.secondElementChild = (numOfLikes + 1) + "Likes";
      document.querySelector(".like-button p").innerHTML = (numOfLikes + 1) + " Likes";
    } else if(localStorage.getItem("liked"+postId) === "true") {
      updateDoc(docRef, {
        likes: numOfLikes 
      });

      e.target.firstElementChild.src = likeoutline;
      console.log("clicked unlike", numOfLikes)
      localStorage.setItem("liked"+postId, "false");

      // setLikesNum((prev) => prev - 1);
      // e.target.secondElementChild = (numOfLikes) + "Likes";
      document.querySelector(".like-button p").innerHTML = (numOfLikes) + " Likes";
    }
  }

  // return (
  //   <>
  //     <Navbar />
  //     {blogList.map((e) => {
  //       if (e.title === params.id) {
  //         //   console.log(e.title);
  //         {/* {setLikesNum(e.likes);} */}

  //         return (
  //           <div key={e.id} className="blogpost">
  //             <h4 className="category-mark">{e.categories}</h4>
  //             <h1 className="title">{e.title}</h1>

  //             <div className="thumbnail" style={{backgroundImage: "url(" + e.thumbURL + ")"}}>
  //               {/* <img src={e.thumbURL} alt=""  /> */}
  //             </div>
              
  //             <div
  //               className="content-container"
  //               dangerouslySetInnerHTML={{ __html: e.content }}
  //             ></div>
  //             <div className="line"></div>
  //             <div className="blog-footer">
  //               <div className="like-button" onClick={(event) => {Like(event, e.id, e.likes)}}>
  //                 <img src={localStorage.getItem("liked"+e.id) === "true" ? likefilled : likeoutline} />
  //                 {likesNum} Likes
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       }
  //     })}
  //     <Footer />
  //   </>
  // );


  return (
    <>
      <Navbar />
      {blogList.map((e) => {
        if (e.title === params.id) {
          //   console.log(e.title);
          {/* {setLikesNum(e.likes);} */}

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
                <div className="like-button" onClick={(event) => {Like(event, e.id, e.likes)}}>
                  <img src={localStorage.getItem("liked"+e.id) === "true" ? likefilled : likeoutline} />
                  <p>{e.likes} Likes</p>
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
