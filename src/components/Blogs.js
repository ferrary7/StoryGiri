import React from 'react'
import Navbar from './Navbar'
import './Blogs.css'
import { Link } from 'react-router-dom'
import leftarrow from "../assets/leftarrow.svg"
import rightarrow from "../assets/rightarrow.svg"
import featureimage from "../assets/featuredarticle-image.png"
import articleimage from "../assets/article-image.png"
import BlogCategoryCard from './BlogCategoryCard'
import EmailInput from './EmailInput'
import BlogCard from './BlogCard'

function Blogs() {
  return (
    <div className='blogpage'>
        <div className='container blog-container intro-container'>
            <Navbar />
            <h1>Welcome to Storygiri’s Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <EmailInput placeholder="Your Email" btn="Sign Up" />
        </div>

        <div className='category-container'>
            <h2>Explore Various Categories</h2>
            <div className='carousel-container'>
                <div className='left-arrow'><img className='arrow' src={leftarrow} alt='left'></img></div>
                <div className='carousel'>
                    <BlogCategoryCard title="Category 1" desc="consectetur adipiscing elit" />
                    <BlogCategoryCard title="Category 2" desc="consectetur adipiscing elit" />
                    <BlogCategoryCard title="Category 3" desc="consectetur adipiscing elit" />
                </div>
                <div className='right-arrow'><img className='arrow' src={rightarrow} alt='right'></img></div>
            </div>
        </div>

        <div className='feature-section'>
            <h2>Featured Article</h2>
            <div className='feature-container'>
                <div className='feature-image' style={{backgroundImage: "url(" + featureimage + ")"}}></div>
                <div className='feature-content'>
                    <div className='category-mark'>Category 1</div>
                    <h4>5 Tips on How to “Wake Up” in Winter’s Morning</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <div className='secondary-btn readmore-btn'>Read More</div>
                </div>
            </div>
        </div>

        <div className='recent-articles-section'>
            <h2>Recent Articles</h2>
            <div className='articles-container'>
                <BlogCard
                    image={articleimage}
                    category="Category 1"
                    title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
                    desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
                />
                <BlogCard
                    image={articleimage}
                    category="Category 1"
                    title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
                    desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
                />
                <BlogCard
                    image={articleimage}
                    category="Category 1"
                    title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
                    desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
                />
                <BlogCard
                    image={articleimage}
                    category="Category 1"
                    title="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
                    desc="Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore"
                />
            </div>

            <div className='cta-section'>
                <h1>Welcome to Storygiri’s Blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                <EmailInput placeholder="Your Email" btn="Sign Up" />
            </div>

            {/* <Footer /> */}
        </div>
    </div>
  )
}

export default Blogs
