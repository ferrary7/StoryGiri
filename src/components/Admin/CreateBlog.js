import React, { useRef, useState } from "react";
import "./CreateBlog.css";
import "../signinForms.css";
import JoditEditor from "jodit-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
// import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState([]);
  const [thumbURL, setThumbURL] = useState("");
  const [content, setContent] = useState("");
  const [successMSG, setSuccessMSG] = useState("");

  const postsCollectionRef = collection(db, "blogposts");
  // const navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      categories,
      tags,
      description,
      thumbURL,
      content,
      likes: 0,
    });
    // navigate("/blogs");
    setTitle("");
    setCategories("");
    setTags("");
    setDescription("");
    setThumbURL("");
    setContent("");
    setSuccessMSG(
      `Blog: "${title.toUpperCase()}" has successfully been added!`
    );
    console.log(`"${title}" is successfully added!`);
  };

  return (
    <div className="create-blog">
      <h1 className="create-blog-heading">Create A Blog</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Blog Title</label>
        <input
          type="text"
          placeholder="Blog"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Add Categories</label>
        <input
          type="text"
          placeholder="Category1, Category2, ..."
          value={categories}
          onChange={(e) => setCategories(e.target.value.split(", "))}
        />
        <label>Add Tags</label>
        <input
          type="text"
          placeholder="Tag1, Tag2, ..."
          value={tags}
          onChange={(e) => setTags(e.target.value.split(", "))}
        />
        <label>Short Description</label>
        <input
          type="text"
          placeholder="This blog is about..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Add Thumbnail Image</label>
        <input
          type="text"
          name="Blog Thumbnail"
          value={thumbURL}
          placeholder="Paste thumbnail image URL"
          onChange={(e) => setThumbURL(e.target.value)}
        />
        <label>Blog Content</label>
        <div>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
          {/* {title}
          <br />
          {categories}
          <br />
          {tags}
          <br />
          {content} */}
        </div>
        {/* <img src="https://drive.google.com/uc?export=view&id=" />
        //https://drive.google.com/file/d/1kK3PrjimTg-zfd_BiMtpl_tEGHY8iQfL/view?usp=sharing */}
        <button className="secondary-btn submit-btn" onClick={createPost}>
          Submit
        </button>
      </form>
      <h1>{successMSG}</h1>
    </div>
  );
}

export default CreateBlog;
