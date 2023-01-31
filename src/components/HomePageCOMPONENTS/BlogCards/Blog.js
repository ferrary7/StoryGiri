import React from "react";
import {  Link, useNavigate } from 'react-router-dom';
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import './Blogblog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Subscribe from "../../Subscribe";

// class Blog extends Component {
//   render() {
//     return (
//       <div className="blogs">
//         <div className="blogContainer">
//           <h1>Blogs</h1>
//           <div className="row">
//             {[1, 2, 3].map(i => (
//               <Card className="blogCard" style={{ width: "22rem", borderRadius: "0.5rem"}}>
//                 <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" className="image"/>
//                 <Card.Body >
//                   <Card.Title style={{ padding: "10px", textAlign: "left"}}>Blog {i} Title</Card.Title>
//                   <Card.Text style={{ padding: "10px", textAlign: "left"}}>
//                     Some quick example text to build on the card title and make up
//                     the bulk of the card's content.
//                   </Card.Text>
//                   <Link to={`/blog${i}`}>
//                     <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
//                   </Link>
//                 </Card.Body>
//               </Card>
//             ))}
//           </div>
//           <div className="browse">
//             <Link to="/more-blogs">
//               <Button className="button">Browse More</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Blog;


// const BlogCard = ({ image, title, description, link }) => {
//   return (
//     <Card className="blogCard" style={{ width: "22rem", borderRadius: "0.5rem"}}>
//       <Card.Img variant="top" src={image} className="image"/>
//       <Card.Body >
//         <Card.Title style={{ padding: "10px", textAlign: "left"}}>{title}</Card.Title>
//         <Card.Text style={{ padding: "10px", textAlign: "left"}}>
//           {description}
//         </Card.Text>
//         <Link to={link}>
//           <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
//         </Link>
//       </Card.Body>
//     </Card>
//   );
// };

// class Blog extends Component {
//   render() {
//     return (
//       <div className="blogs">
//         <div className="blogContainer">
//           <h1>Blogs</h1>
//           <div className="row">
//             {[1, 2, 3].map(i => (
//               <BlogCard
//                 image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
//                 title={`Blog ${i} Title`}
//                 description="Some quick example text to build on the card title and make up the bulk of the card's content."
//                 link={`/blog${i}`}
//               />
//             ))}
//           </div>
//           <div className="browse">
//             <Link to="/more-blogs">
//               <Button className="button">Browse More</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


const BlogCard = ({ image, blogName, description, logo }) => {
  return (
    <div className="blogCard">
      <img className="blogCard__image" src={image} alt={blogName} />
      <div className="blogCard__content">
        <h3 className="blogCard__blogName"><b>{blogName}</b></h3>
        <p className="blogCard__description">{description}</p>  
        <Link to={logo}>
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </Link>  
      </div>
    </div>
  );
};

const Blog = () => {
  const navigater = useNavigate();
  return (
    <div className="blogContainer">
      <h1 className="blogContainer__heading">Blogs</h1>
      <p className="blogContainer__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
      </p>
      <div className="blogCards">
        <BlogCard
          image="https://via.placeholder.com/150"
          blogName="LOREM 1"
          description="Master the art of course 1"
        />
        <BlogCard
          image="https://via.placeholder.com/150"
          blogName="LOREM 2"
          description="Master the art of course 2"
        />
        <BlogCard
          image="https://via.placeholder.com/150"
          blogName="LOREM 3"
          description="Master the art of course 3"
        />
      </div>
        <div className="blogContainer__button" >
          <button onClick={()=> {window.scrollTo(0, 0); navigater("/blogs")}}>Browse More</button>
        </div>
      <h3 style={{paddingTop: '10rem', textAlign: 'center'}}>Subscribe for latest blog updates.</h3>
      <div className="subscribe-card-form">
            <form>
              <Subscribe />
            </form>
        </div>
    </div>
  );
};


export default Blog;
