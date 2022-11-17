import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./BlogList.css";

export default function BlogList({ blogs }) {
  console.log(blogs);
  if (blogs.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  return (
    <div className="blog-container">
      <h1 style={{ textAlign: "center", color: "white" }}>BLOG</h1>
      <Row xs={1} md={3} className="blog-row g-4 mt-5 p-3">
        {blogs.map((blog) => (
          <Col key={blog.id} className="blog-cards">
            <Card>
              <Card.Body className="blog-cards">
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.body}</Card.Text>
                <Button id="blog__btn">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
