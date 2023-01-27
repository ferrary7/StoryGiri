import React from 'react'
import './CreateBlog.css'

function CreateBlog() {
  return (
    <div className='create-blog'>
      <h2>Create Blog</h2>
      <form>
        <p>Blog Title</p>
        <input type="text" placeholder='Blog'></input>

        <p>Add Categories</p>
        <input type="text" placeholder='Category1, Category2, etc'></input>

        <input type="file" id="myFile" name="Blog Thumbnail"></input>

        <p>Content</p>
        <input className='blog-content' type="text"></input>

        <button className='secondary-btn'>Submit</button>
      </form>
    </div>
  )
}

export default CreateBlog
