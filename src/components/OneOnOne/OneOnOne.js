import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Subscribe from '../Subscribe'
import './OneOnOne.css'
import WhyConsider from './WhyConsider'

function OneOnOne() {
  return (
    <div className='oneone'>
      <Navbar />
      <div className="container one-container intro-container">
        <h1>One on One</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className='why-container'>
        <h2>Our Team</h2>
        <WhyConsider align="left" title="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <WhyConsider align="right" title="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <WhyConsider align="left" title="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <WhyConsider align="right" title="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>

      <div className='cta-section'>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>consectetur adipiscing elit</p>
        <div className='secondary-btn'>Book 1 on 1</div>
      </div>

      <Footer />
    </div>
  )
}

export default OneOnOne
