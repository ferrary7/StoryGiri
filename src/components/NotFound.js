import React from "react";
import "./NotFound.css";
import NF from "./../assets/404-not-found.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <img src={NF} alt="" className="not-found-img" />
      <h1 className="warning">Page Not Found</h1>
      <Link to="/">
        <button className="go-back-button">Go to Home Page</button>
      </Link>
    </div>
  );
}
