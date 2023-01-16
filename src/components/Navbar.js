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
