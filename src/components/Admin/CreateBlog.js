import React, { useRef, useState } from "react";
import "./CreateBlog.css";
import JoditEditor from "jodit-react";

function CreateBlog() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div className="create-blog">
      <h2>Create Blog</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>Blog Title</p>
        <input type="text" placeholder="Blog"></input>

        <p>Add Categories</p>
        <input type="text" placeholder="Category1, Category2, etc"></input>

        <input type="file" id="myFile" name="Blog Thumbnail"></input>

        <p>Content</p>
        <div>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
          {content}
        </div>

        <button className="secondary-btn">Submit</button>
      </form>
    </div>
  );
}

export default CreateBlog;
