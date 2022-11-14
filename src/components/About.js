import "./About.css";
import React from "react";
import rocket from "../images/rocket.png";
import responsive from "../images/responsive.png";
import intuitive from "../images/intuitive.png";
import dynamic from "../images/dynamic.png";
import headshot from "../images/headshot.jpg";
import { Row, Container, Col } from "react-bootstrap";
import {
  DiNodejs,
  DiReact,
  DiPostgresql,
  DiJavascript1,
  DiCss3Full,
  DiGit,
  DiHtml5,
} from "react-icons/di";
import { SiCsharp } from "react-icons/si";
import { useTheme } from "../hooks/useTheme";

export default function About() {
  const { mode } = useTheme();
  return (
    <div className={`about__container ${mode}`}>
      <div id="about__title">
        <h1>ABOUT</h1>
      </div>
      <div className="d-flex justify-content-evenly">
        <Row>
          <Col size="md" className="text-center fadeIn">
            <img src={rocket} alt="rocket" />
            <h2>FAST</h2>
            <p>
              Fast load times and lage free interaction is my highest priority
            </p>
          </Col>
          <Col size="md" className="text-center">
            <img src={responsive} alt="responsive" />
            <h2>RESPONSIVE</h2>
            <p>My layouts will work on any device, big or small.</p>
          </Col>
          <Col size="md" className="text-center">
            <img src={intuitive} alt="intuitive" />
            <h2>INTUITIVE</h2>
            <p>Strong preference for easy to use, intuitive UX/UI.</p>
          </Col>
          <Col size="md" className="text-center">
            <img src={dynamic} alt="dynamic" />
            <h2>DYNAMIC</h2>
            <p>
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </Col>
        </Row>
      </div>
      <Container>
        <Row around id="skills__row">
          <Col size="md" className="text-center">
            <img
              className="img-fluid rounded-pill"
              id="headshot"
              src={headshot}
              alt="headshot"
            />
            <h2 className="mt-2">Who am I?</h2>
            <p>
              I'm a Front End Developer for USAA. I'm passionate about creating
              intuitive, dynamic, & responsive user experiences.
            </p>
          </Col>
        </Row>
        <div className="mt-5">
          <Row className="grid">
            <Col xs={12} md={3} className="text-center">
              <DiReact className="FaStyles" />
              <h2>REACT</h2>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <SiCsharp className="FaStyles" />
              <h2>C#</h2>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <DiHtml5 className="FaStyles" />
              <h2>HTML5</h2>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <DiCss3Full className="FaStyles" />
              <h2>CSS3</h2>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <DiJavascript1 className="FaStyles" />
              <h2>Javascript</h2>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <DiNodejs className="FaStyles" />
              <h2>Node.js</h2>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <DiPostgresql className="FaStyles" />
              <h2>Postgres</h2>
            </Col>
            <Col xs={12} md={3} className="text-center">
              <DiGit className="FaStyles" />
              <h2>Git</h2>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
