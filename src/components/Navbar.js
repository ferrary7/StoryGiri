// Navbar by Aditya

import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <p className='logo'>StoryGiri</p>
      <div>
        <div className='navlinks'>
            <p className='navlink'>Link</p>
            <p className='navlink'>Link</p>
            <p className='navlink'>Link</p>
        </div>
        <div className='navbar-btn secondary-btn'>
            Log In
        </div>
      </div>
    </div>
  )
}

export default Navbar

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
