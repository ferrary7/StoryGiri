import React from 'react'
import './BlogCard.css'

function BlogCard(props) {
  return (
    <div className='blog-card'>
        <div className='blog-image' style={{backgroundImage: "url(" + props.image + ")"}}></div>
        <div className='category-mark'>{props.category}</div>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
        <div className='secondary-btn readmore-btn'>Read More</div>

    </div>
  )
}

export default BlogCard
