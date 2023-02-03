import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../components/Firebase/firebase-config";

export default function GetBlogs() {
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    const postsCollectionRef = collection(db, "blogposts");
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();

    // return d;
  }, []);

  return blogList;
}
