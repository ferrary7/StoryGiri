import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

  const goTo = useNavigate(); 
  return (
    <footer>
        <div className='footerSrction logo'>
            LOGO
        </div>
      <div className="footerSection about">
        <h4>About</h4>
        <ul>
          <li onClick={()=> {window.scrollTo(0, 0); goTo("/about")}}>
            {/* <Link to="/about-storygiri">About Storygiri</Link> */}About Storygiri
          </li>
          <li onClick={()=> {window.scrollTo(0, 0); goTo("/policy")}}>
            {/* <Link to="/privacy-policy">Privacy Policy</Link> */}Privacy Policy
          </li>
          <li onClick={()=> {window.scrollTo(0, 0); goTo("/t&c")}}>
            {/* <Link to="/terms-and-conditions">Terms and Conditions</Link> */}Terms and Conditions
          </li>
          <li onClick={()=> {window.scrollTo(0, 0); goTo("/contact")}}>
            {/* <Link to="/contact-us">Contact Us</Link> */}Contact Us
          </li>
        </ul>
      </div>
      <div className="footerSection links">
        <h4>Links</h4>
        <ul>
          <li onClick={()=> {window.scrollTo(0, 0); goTo("/blogs")}}>
            {/* <Link to="/blogs">Blogs</Link> */}Blogs
          </li>
          <li onClick={()=> {window.scrollTo(0, 0); goTo("/courses")}}>
            {/* <Link to="/courses">Courses</Link> */}Courses
          </li>
          <li onClick={()=> {window.scrollTo(0, 0); goTo("/videos")}}>  
            {/* <Link to="/videos">Videos</Link> */}Videos
          </li>
          <li onClick={()=> {window.scrollTo(0, 0); goTo("/events")}}>
            {/* <Link to="/events">Events</Link> */}Events
          </li>
        </ul>
      </div>
      <div className="footerSection social">
        <h4>Social</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/storygiri/">
              {/* <img src={InstagramLogo} alt="Instagram Logo" /> */}
              ISTG
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/storygiri/">
              {/* <img src={FacebookLogo} alt="Facebook Logo" /> */}
              FB
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/storygiri/">
              {/* <img src={YoutubeLogo} alt="Youtube Logo" /> */}
              YT
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright">Copyright © {new Date().getFullYear()} Storygiri</p>
    </footer>
  );
}

export default Footer;
