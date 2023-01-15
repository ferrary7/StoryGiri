import React from 'react'
import Navigation from './Navbar'
import Footer from './Footer'
import NewsLetter from './NewsLetter/NewsLetter'

const HomePage = () => {
  return (
    <div>
        <Navigation />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default HomePage