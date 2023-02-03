import React from "react";
import "./BlogCard.css";
import parse from "html-react-parser";

function BlogCard(props) {
  return (
    <div className="blog-card">
      <div
        className="blog-image"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      ></div>
      {props.categories &&
        props.categories.map((e) => {
          return <div className="category-mark">{e}</div>;
        })}
      <h4>{props.title}</h4>
      {/* {console.log(typeof props.desc)} */}
      <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
      <div className="secondary-btn readmore-btn">Browse Content</div>
    </div>
  );
}

export default BlogCard;
