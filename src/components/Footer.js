import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Footer.css'
import footerlogo from '../assets/logo-dark.svg';
import instagram from '../assets/instagramW.svg';
import youtube from '../assets/youtubeW.svg';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/mail.svg';

const Footer = () => {

  const goTo = useNavigate(); 
  return (
    <footer>
      <div className='footerlogo'>
          <img src={footerlogo} alt="logo" />
      </div>
      <div>
        <div className="footer-group about">
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
        <div className="footer-group links">
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
        <div className="footer-group social">
          <h4>Social</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/storygiri/">
                <img className='footer-icon' src={instagram} alt="Instagram Logo" />
                Instagram
              </a>
            </li>
            <li>
              <a href="/">
                <img className='footer-icon' src={linkedin} alt="linkedin" />
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/storygiri/">
                <img className='footer-icon' src={youtube} alt="Youtube Logo" />
                YouTube
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-group contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <img className='footer-icon' src={mail} alt="Email" />
              example@sdfd.com
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">Copyright © {new Date().getFullYear()} Storygiri</p>
    </footer>
  );
}

export default Footer;
