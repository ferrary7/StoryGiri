import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";

function VideoCard(props) {
  return (
    <div className="video-card">
      <div
        className="video-image"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      ></div>
      <h4>{props.title}</h4>
      {/* <p dangerouslySetInnerHTML={{ __html: props.desc }}></p> */}
      <p>{props.desc}</p>
      <Link to={`/blogs/${props.title}`}>
        <div className="secondary-btn readmore-btn">Watch Video</div>
      </Link>
    </div>
  );
}

export default VideoCard;