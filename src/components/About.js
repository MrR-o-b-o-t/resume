import "./About.css";
import React from "react";
import rocket from "../images/rocket.png";
import responsive from "../images/responsive.png";
import intuitive from "../images/intuitive.png";
import dynamic from "../images/dynamic.png";
import headshot from "../images/headshot.jpg";
import Fade from "react-reveal/Fade";
import { Row, Container, Col } from "react-bootstrap";
import {
  DiNodejs,
  DiReact,
  DiPostgresql,
  DiJavascript1,
  DiCss3Full,
  DiGit,
  DiHtml5,
  DiJava,
} from "react-icons/di";
import { useTheme } from "../hooks/useTheme";

export default function About() {
  const { mode } = useTheme();
  return (
    <div className={`about__container ${mode}`}>
      <div id="about__title">
        <h1>ABOUT</h1>
      </div>
      <div className="d-flex justify-content-evenly p-3">
        <Row>
          <Col md className="text-center">
            <Fade bottom>
              <img src={rocket} alt="rocket" />
              <h2>FAST</h2>
              <p>
                Fast load times and lage free interaction is my highest priority
              </p>
            </Fade>
          </Col>
          <Col md className="text-center">
            <Fade delay={500} bottom>
              <img src={responsive} alt="responsive" />
              <h2>RESPONSIVE</h2>
              <p>My layouts will work on any device, big or small.</p>
            </Fade>
          </Col>
          <Col md className="text-center">
            <Fade delay={1000} bottom>
              <img src={intuitive} alt="intuitive" />
              <h2>INTUITIVE</h2>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </Fade>
          </Col>
          <Col md className="text-center">
            <Fade delay={1500} bottom>
              <img src={dynamic} alt="dynamic" />
              <h2>DYNAMIC</h2>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </Fade>
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
              I'm a Front End Developer. I'm passionate about creating
              intuitive, dynamic, & responsive user experiences.
            </p>
          </Col>
        </Row>
        <div className="mt-5">
          <Row className="grid">
            <Col xs={6} md={3} className="text-center mb-5">
              <DiReact className="FaStyles" />
              <h2>REACT</h2>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <DiJava className="FaStyles" />
              <h2>Java</h2>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <DiHtml5 className="FaStyles" />
              <h2>HTML5</h2>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <DiCss3Full className="FaStyles" />
              <h2>CSS3</h2>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <DiJavascript1 className="FaStyles" />
              <h2>Javascript</h2>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <DiNodejs className="FaStyles" />
              <h2>Node.js</h2>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <DiPostgresql className="FaStyles" />
              <h2>Postgres</h2>
            </Col>
            <Col xs={6} md={3} className="text-center mb-5">
              <DiGit className="FaStyles" />
              <h2>Git</h2>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
