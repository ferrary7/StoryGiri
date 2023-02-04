import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import Blogs from "./components/Blogs";
import About from "./components/About";
import TandC from "./components/TandC";
import PrivacyPolicy from "./components/PirvacyPolicy";
import Events from "./components/EventsPage/Events";
import OneOnOne from "./components/OneOnOne";
import Videos from "./components/Videos";
import BlogPostTest from "./components/BlogPostTest";
import CreateBlog from "./components/Admin/CreateBlog";
import LoginWithGoogle from "./components/LoginWithGoogle";

function App() {
  const [user, setUser] = [];
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      <Route
        path="/admin-login"
        element={<LoginWithGoogle user={user} setUser={setUser} />}
      />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
      <Route path="/t&c" element={<TandC />} />
      <Route path="/policy" element={<PrivacyPolicy />} />
      <Route path="/events" element={<Events />} />
      <Route path="/ooo" element={<OneOnOne />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/admin-blog" element={<CreateBlog />} />
      <Route path="/blogs/:id" element={<BlogPostTest />} />
    </Routes>
  );
}

export default App;

// import React from "react";
// import './App.css';
// import Videos from './components/Videos'

// function App(){
//   return(
//     <Videos />
//   )
// }

// export default App;
