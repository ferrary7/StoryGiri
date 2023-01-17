import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footerSrction logo'>
            LOGO
        </div>
      <div className="footerSection about">
        <h4>About</h4>
        <ul>
          <li>
            <Link to="/about-storygiri">About Storygiri</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footerSection links">
        <h4>Links</h4>
        <ul>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
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
