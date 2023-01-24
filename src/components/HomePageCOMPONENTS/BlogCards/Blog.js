import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './Blogblog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class Blog extends Component {
  render() {
    return (
      <div className="blogs">
        <div className="blogContainer">
          <h1>Blogs</h1>
          <div className="row">
            {[1, 2, 3].map(i => (
              <Card className="blogCard" style={{ width: "16rem", borderRadius: "0.5rem"}}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" className="image"/>
                <Card.Body >
                  <Card.Title style={{ padding: "10px", textAlign: "left"}}>Blog {i} Title</Card.Title>
                  <Card.Text style={{ padding: "10px", textAlign: "left"}}>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </Card.Text>
                  <Link to={`/blog${i}`}>
                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="browse">
            <Link to="/more-blogs">
              <Button className="button">Browse More</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
