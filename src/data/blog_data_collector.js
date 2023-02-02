import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "../components/Firebase/firebase-config";

const postsCollectionRef = collection(db, "blogposts");

let output = [];
const getPosts = async () => {
  const data = await getDocs(postsCollectionRef);
  return data.docs;
};

// const data = getPosts();
let d = getPosts();
console.log(d);
export default d;

// import React, { useState, useEffect } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../components/Firebase/firebase-config";

// export default function BlogDataCollector() {
//   useEffect(() => {
//     const postsCollectionRef = collection(db, "blogposts");
//     let d = [];
//     const getPosts = async () => {
//       const data = await getDocs(postsCollectionRef);
//       // d = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//       console.log(data);
//     };

//     getPosts();

//     return d;
//   }, []);

//   return <div>blog_data_collector</div>;
// }
