import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import "./Blogblog.css";
import Subscribe from "../../Subscribe";
import GetBlogs from "../../../data/GetBlogs";
import blogArrow from "../../../assets/blog-card-arrow.svg";
const BlogCard = ({ image, blogName, description, logo }) => {
  return (
    <div className="blogCard">
      {/* <img className="blogCard__image" src={image} alt={blogName} /> */}
      <div
        className="blogCard__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="blogCard__content">
        <h3 className="blogCard__blogName">
          <b>{blogName.split(" ").slice(0, 8).join(" ")}...</b>
        </h3>
        <p className="blogCard__description">{description.slice(0, 70)}...</p>
      </div>

      <Link className="arrow-icon" to={`/blogs/${blogName}`}>
        <img className="arrow-icon" src={blogArrow} alt="" />
      </Link>
    </div>
  );
  // {
  // return (
  //   <div className="blog-card">
  //     <div
  //       className="blog-img"
  //       style={{ backgroundImage: `url(${image})` }}
  //     ></div>
  //     <div className="blog-content">
  //       <h3 className="blog-title">{blogName}</h3>
  //       <p className="blog-desc">{description}</p>
  //       <Link to={`/blogs/${blogName}`}>
  //         <img src={blogArrow} alt="" className="blog-arrow" />
  //       </Link>
  //     </div>
  //   </div>
  // );
  // }
};

const Blog = () => {
  let blogList = GetBlogs();
  console.log(blogList);
  const navigater = useNavigate();
  return (
    <div className="blogContainer">
      <h1 className="blogContainer__heading">Blogs</h1>
      <p className="blogContainer__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
      </p>
      <div className="blogCards">
        {blogList.map((e, i) => {
          if (i < 3)
            return (
              <BlogCard
                image={e.thumbURL}
                blogName={e.title}
                description={e.description}
              />
            );
          else {
            return "";
          }
        })}
      </div>
      <div className="blogContainer__button">
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            navigater("/blogs");
          }}
        >
          Browse More
        </button>
      </div>
      <h3 style={{ paddingTop: "10rem", textAlign: "center" }}>
        Subscribe for latest blog updates.
      </h3>
      <div className="subscribe-card-form">
        <form>
          <Subscribe />
        </form>
      </div>
    </div>
  );
};

export default Blog;
