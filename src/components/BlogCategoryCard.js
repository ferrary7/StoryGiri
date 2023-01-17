import React from 'react'
import './BlogCategoryCard.css'

function BlogCategoryCard(props) {
  return (
    <div className='blog-category-card'>
      <div className='category-image' style={{backgroundImage: "url(" + props.image + ")"}}></div>
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  )
}

export default BlogCategoryCard
