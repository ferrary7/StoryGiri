import React, { useRef, useState } from "react";
import "./CreateBlog.css";
import JoditEditor from "jodit-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [thumbURL, setThumbURL] = useState("");
  const [content, setContent] = useState("");

  const postsCollectionRef = collection(db, "blogposts");
  const navigate = useNavigate()
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      categories,
      tags,
      thumbURL,
      content
    });
    navigate("/blogs");
  }

  return (
    <div className="create-blog">
      <h2>Create Blog</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>Blog Title</p>
        <input
          type="text" placeholder="Blog"
          onChange={(e) => setTitle(e.target.value)}
        />

        <p>Add Categories</p>
        <input
          type="text"
          placeholder="Category1, Category2, etc"
          onChange={(e) => setCategories(e.target.value.split(", "))}
        />

        <p>Add Tags</p>
        <input
          type="text"
          placeholder="Category1, Category2, etc"
          onChange={(e) => setTags(e.target.value.split(", "))}
        />

        <p>Add Thumbnail Image</p>
        <input
          type="text"
          name="Blog Thumbnail"
          placeholder="Paste thumbnail image URL"
          onChange={(e) => setThumbURL(e.target.value)}
        />

        <p>Blog Content</p>
        <div>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
          {title}
          <br />
          {categories}
          <br />
          {tags}
          <br />
          {content}
        </div>

        <img src="https://drive.google.com/uc?export=view&id=" />
        //https://drive.google.com/file/d/1kK3PrjimTg-zfd_BiMtpl_tEGHY8iQfL/view?usp=sharing

        <button className="secondary-btn" onClick={createPost}>Submit</button>
      </form>
    </div>
  );
}

export default CreateBlog;
