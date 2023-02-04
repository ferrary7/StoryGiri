import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

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
      {/* <p dangerouslySetInnerHTML={{ __html: props.desc }}></p> */}
      <p>{props.desc}</p>
      <Link to={`/blogs/${props.title}`}>
        <div className="secondary-btn readmore-btn">Browse Content</div>
      </Link>
    </div>
  );
}

export default BlogCard;
