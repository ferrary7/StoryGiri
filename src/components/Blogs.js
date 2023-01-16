import React from 'react'
import Navbar from './Navbar'
import './Blogs.css'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <>
        <div className='container blog-container intro-container'>
            <Navbar />
            <h1>Welcome to Storygiri’s Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <div className='email-div'>
                <div>
                    <input type='email' />
                    <div className='btn secondary-btn'>Sign Up</div>
                </div>

                <p className='note'>
                    By clicking Sign Up you're confirming that you agree with our <Link>Terms and Conditions</Link>.
                </p>
            </div>

            
        </div>
    </>
  )
}

export default Blogs
