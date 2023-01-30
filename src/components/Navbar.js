// Navbar by Aditya

// import React from 'react'
// import './Navbar.css'
// import { Link } from 'react-router-dom';

// function Navigation() {
//   return (
//     <div className='navbar'>
//       <p className='logo'><Link to='/'>StoryGiri</Link></p>
//       <div>
//         <div className='navlinks'>
//             <p className='navlink'><Link to='/about'>About Us</Link></p>
//             <p className='navlink'><Link to='/blogs'>Blogs</Link></p>
//             <p className='navlink'><Link to='/ooo'>Book a 1-1 Call</Link></p>
//             <p className='navlink'><Link to='/videos'>Videos</Link></p>
//             <p className='navlink'><Link to='/videos'>Upcoming</Link></p>
//         </div>
//         <div className='navbar-btn secondary-btn'>
//             Log In
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navigation

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo_v2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        {isMobile ? (
          <div>
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/about">About Us</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/ooo">Book a 1-1 Call</Link>
                <Link to="/videos">Videos</Link>
                <Link to="/courses">Our Courses</Link>
                <Link to="/events">Events</Link>
              </div>
            )}
          </div>
        ) : (
          <div className="navlinks">
            <p className="navlink">
              <Link to="/about" style={{ color: "#324055" }}>
                About Us
              </Link>
            </p>
            <p className="navlink">
              <Link to="/blogs" style={{ color: "#324055" }}>
                Blogs
              </Link>
            </p>
            <p className="navlink">
              <Link to="/ooo" style={{ color: "#324055" }}>
                Book a 1-1 Call
              </Link>
            </p>
            <p className="navlink">
              <Link to="/videos" style={{ color: "#324055" }}>
                Videos
              </Link>
            </p>
            <p className="navlink">
              <span
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ color: "#324055" }}
              >
                Upcoming
                <FontAwesomeIcon icon="fa-solid fa-angle-down" />
              </span>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/courses">Our Courses</Link>
                  <Link to="/events">Events</Link>
                </div>
              )}
            </p>
          </div>
        )}

        <div
          className="hamburger-icon"
          onClick={() => setShowNav(!showNav)}
        ></div>
      </div>
    </div>
  );
}

export default Navigation;

///Navbar by Aryan
// import React from 'react';
// import './Navbar.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// // import { Link } from 'react-router-dom';
// // import { useState } from 'react';

// const Navigation = () => {
//   return (
//     <Navbar bg="#F0E9DD" variant='light' sticky='top' expand='sm' className='navContainer'>
//       <Navbar.Brand className='logo'>
//         LOGO
//       </Navbar.Brand>
//       <Navbar.Toggle />

//       <Navbar.Collapse>
//       <Nav className='menu'>
//         <Nav.Link>My Courses</Nav.Link>
//         <NavDropdown title='Dropdown'>
//           <NavDropdown.Item>One</NavDropdown.Item>
//           <NavDropdown.Item>Two</NavDropdown.Item>
//           <NavDropdown.Item>Three</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item>Four</NavDropdown.Item>
//         </NavDropdown>
//         <Nav.Link>About Us</Nav.Link>
//         <Nav.Link>Contact Us</Nav.Link>
//         <button><Nav.Link>Log In</Nav.Link></button>
//       </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   )
// }

// export default Navigation
