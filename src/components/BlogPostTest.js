import React from "react";
import GetBlogs from "../data/GetBlogs";
import { useParams } from "react-router-dom";

export default function BlogPostTest() {
  let blogList = GetBlogs();
  const params = useParams();

  return (
    <>
      {blogList.map((e) => {
        if (e.title === params.id) {
          //   console.log(e.title);
          return (
            <div key={e.id}>
              <h1 className="title">{e.title}</h1>
              <h4 className="cetegory">{e.categories}</h4>
              <img src={e.thumbURL} alt="" />
              <div
                className="content-container"
                dangerouslySetInnerHTML={{ __html: e.content }}
              ></div>
              <button className="like-counter btn btn-primery">
                {e.likes} Likes
              </button>
            </div>
          );
        }
      })}
    </>
  );
}
