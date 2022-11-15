import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./BlogList.css";

export default function BlogList(data) {
  console.log(data.blogs[0].title);
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>BLOG</h1>
      <Row xs={1} md={3} className="blog-row g-4 mt-5 p-3">
        <Col>
          <Card>
            <Card.Body className="blog-cards">
              <Card.Title>{data.blogs[0].title}</Card.Title>
              <Card.Text>{data.blogs[0].body}</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="blog-cards">
              <Card.Title>{data.blogs[0].title}</Card.Title>
              <Card.Text>{data.blogs[0].body}</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="blog-cards">
              <Card.Title>{data.blogs[0].title}</Card.Title>
              <Card.Text>{data.blogs[0].body}</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
